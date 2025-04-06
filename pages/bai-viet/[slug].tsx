import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import parse from "html-react-parser";
import DefaultLayout from "../../components/layout/DefaultLayout";
import db from "../../utils/db";
import Post from "../../models/Post";
import Head from "next/head";
import Share from "../../components/common/Share";
import Link from "next/link";
import Image from "next/image";
import { trimText } from "../../utils/helper"; // Import trimText

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const host = "https://truongnq.vn/bai-viet";

export const APP_NAME = "Trường NQ Web";
const SinglePost: NextPage<Props> = ({ post }) => {
  const { title, content, meta, slug, thumbnail, category, createdAt, relatedPosts } = post;

  return (
    <DefaultLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={meta} />
        <meta name="author" content="Trường NQ Web" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={meta} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={`https://truongnq.vn/bai-viet/${slug}`} />
      </Head>

      <div className="container mx-auto px-8 py-8 md:flex md:space-x-8">
        <div className="col-12 col-md-10 mb-4 mb-md-0">
          <div className="md:pb-20 pb-6 container mx-auto mt-[60px] sm:mt-[91px]">
            {/* Breadcrumb */}
            <div className="flex font-semibold gap-2 text-sm text-gray-600">
              <Link href="/bai-viet" className="hover:text-blue-800 whitespace-nowrap">
                Bài viết
              </Link>
              <span>›</span>
              <span className="flex font-semibold gap-2 mb-4 text-sm text-gray-600">
                {trimText(title, 35)} {/* Cắt title trong breadcrumb nếu cần */}
              </span>
            </div>

            {/* Tiêu đề bài viết */}
            <h1 className="md:text-3xl text-xl font-bold text-primary-dark dark:text-primary">
              {title}
            </h1>
            <div className="mt-2 mb-2">
              <Share url={host + "/" + slug} />
            </div>
            <div className="mt-2 uppercase text-green-800 font-xl">
              <b>{category}</b>
            </div>
            <div className="blog prose prose-lg dark:prose-invert max-w-2xl md:max-w-4xl lg:max-w-5xl">
              {parse(content)}
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        <div className="col-12 col-md-2 px-2 md:mt-[91px] mt-10">
          <div className="pt-5">
            <p className="text-3xl font-semibold text-primary-dark dark:text-primary p-2 mb-4">
              Bài viết cùng chủ đề
            </p>
            <div className="flex items-center flex-col space-y-4">
              {relatedPosts
                .filter((p) => p.category === category)
                .slice(0, 5) // Giới hạn 5 bài viết
                .map((p) => (
                  <Link key={p.slug} href={`/bai-viet/${p.slug}`} legacyBehavior>
                    <a className="flex space-x-4 font-semibold text-primary-dark dark:text-primary hover:underline w-full">
                      {p.thumbnail && (
                        <Image
                          src={p.thumbnail}
                          alt={p.title}
                          width={192}
                          height={128}
                          className="w-48 h-32 object-cover rounded hover:scale-102 transition-all ease duration-300 md:block hidden" // Ẩn ảnh trên mobile
                        />
                      )}
                      <span className="flex flex-col">
                        {/* Hiển thị category chỉ trên desktop */}
                        <span className="hidden md:block text-green-800 uppercase text-sm mb-1 underline ">
                          {p.category} {/* Cắt category nếu dài */}
                        </span>
                        <span>{p.title}</span> {/* Cắt title */}
                      </span>
                    </a>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SinglePost;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    await db.connectDb();
    const posts = await Post.find().select("slug");
    const paths = posts.map(({ slug }) => ({ params: { slug } }));
    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    return {
      paths: [{ params: { slug: "/" } }],
      fallback: false,
    };
  }
};

interface StaticPropsResponse {
  post: {
    id: string;
    title: string;
    content: string;
    meta: string;
    tags: string[];
    slug: string;
    thumbnail: string;
    createdAt: string;
    category: string;
    relatedPosts: {
      id: string;
      title: string;
      slug: string;
      category: string;
      thumbnail?: string;
    }[];
  };
}

export const getStaticProps: GetStaticProps<
  StaticPropsResponse,
  { slug: string }
> = async ({ params }) => {
  try {
    await db.connectDb();
    const post = await Post.findOne({ slug: params?.slug });
    if (!post) return { notFound: true };

    const posts = await Post.find({
      _id: { $ne: post._id },
      category: post.category,
    })
      .sort({ createdAt: "desc" })
      .limit(5) // Đảm bảo chỉ lấy 5 bài
      .select("slug title thumbnail category");

    const relatedPosts = posts.map((p) => ({
      id: p._id.toString(),
      title: p.title,
      slug: p.slug,
      category: p.category || "Uncategorized",
      thumbnail: p.thumbnail?.url,
    }));

    const { _id, title, content, meta, slug, tags, thumbnail, category, createdAt } = post;
    return {
      props: {
        post: {
          id: _id.toString(),
          title,
          content,
          meta,
          slug,
          tags,
          category,
          thumbnail: thumbnail?.url || "",
          createdAt: createdAt.toString(),
          relatedPosts,
        },
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};