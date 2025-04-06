import { useState } from "react";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Link from "next/link";
import PaginatedPosts from "../../components/common/PaginatedPosts";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { formatPosts, readPostsFromDb } from "../../lib/utils";
import { PostDetail, UserProfile } from "../../utils/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import MainCategories from "../../components/common/MainCategories";
import { trimText } from "../../utils/helper";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Blogs: NextPage<Props> = ({ posts }) => {
  const [postsToRender, setPostsToRender] = useState(posts);
  const [filteredPosts, setFilteredPosts] = useState<PostDetail[]>(posts); // Lưu trữ bài viết đã lọc
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Danh mục được chọn

  const postsPerPage = 5; // Số bài viết mỗi trang
  const totalPages = Math.ceil(postsToRender.length / postsPerPage);

  const ogImageUrl = "/images/thumb.jpg"; // Đã bỏ "/public" vì Next.js tự động phục vụ từ thư mục public

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  // Hàm xử lý khi chọn danh mục
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category); // Cập nhật danh mục hiện tại
    if (category) {
      const filtered = posts.filter((post) => post.category === category); // Lọc bài viết theo danh mục
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts); // Hiển thị tất cả bài viết nếu chọn "Tất cả bài viết"
    }
  };

  return (
    <>
      <DefaultLayout>
        <Head>
          <title>Bài viết & Chia Sẻ</title>
          <meta
            name="og:description"
            content="Giá kệ siêu thị Tân Phát, với gần một thập kỷ hoạt động trong ngành cung cấp giải pháp kệ hàng, đã nhanh chóng trở thành một trong những tên tuổi uy tín và đáng tin cậy tại Việt Nam"
          />
          <meta property="og:url" content="https://truongnq.vn/bai-viet" />
          <meta property="og:image" content={ogImageUrl} />
        </Head>
        <div className="h-[80px] bg-white"></div>
        <div className="pb-12">
          <div className="flex flex-col gap-4 w-full">
            {/* Breadcrumb */}
            <div className="flex gap-2 px-4">
              <Link href="/">Trang chủ</Link>
              <span>•</span>
              <Link href="/bai-viet" className="text-blue-800">
                Bài viết & Chia Sẻ
              </Link>
            </div>

            {/* Featured Posts */}
            <div className="flex flex-col lg:flex-row gap-6 justify-between px-4 lg:px-12">
              {/* First Featured Post */}
              <div className="w-full lg:w-8/12 flex flex-col gap-2">
                {postsToRender[0]?.thumbnail && (
                  <div className="aspect-video relative cursor-pointer rounded shadow-sm shadow-secondary-dark overflow-hidden">
                    <Image
                      src={postsToRender[0]?.thumbnail}
                      layout="fill"
                      className="object-cover hover:scale-105 transition-all ease duration-300"
                      alt={postsToRender[0]?.title}
                    />
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold lg:text-lg">01.</h2>
                  <Link
                    href={`/category/${postsToRender[0]?.category}`}
                    className="text-blue-800 lg:text-lg"
                  >
                    {postsToRender[0]?.category}
                  </Link>
                  <span className="text-gray-500">
                    {formatDate(postsToRender[0]?.createdAt)}
                  </span>
                </div>
                <Link
                  href={`/bai-viet/${postsToRender[0]?.slug}`}
                  className="text-base sm:text-lg md:text-xl font-medium"
                >
                  {postsToRender[0]?.title}
                </Link>
              </div>

              {/* Other Featured Posts */}
              <div className="w-full lg:w-6/12 flex flex-col gap-4">
                {[1, 2, 3].map(
                  (index) =>
                    postsToRender[index] && (
                      <div
                        key={index}
                        className="flex justify-between gap-4 h-auto lg:h-1/3"
                      >
                        {postsToRender[index]?.thumbnail && (
                          <div className="w-1/3 aspect-video relative cursor-pointer rounded shadow-sm shadow-secondary-dark overflow-hidden">
                            <Image
                              src={postsToRender[index]?.thumbnail}
                              layout="fill"
                              className="object-cover hover:scale-105 transition-all ease duration-300"
                              alt={postsToRender[index]?.title}
                            />
                          </div>
                        )}
                        <div className="w-2/3 flex flex-col justify-center">
                          <div className="flex items-center gap-2 text-sm lg:text-base mb-1">
                            <h2 className="font-semibold">{`0${index + 1}.`}</h2>
                            <Link
                              href={`/category/${postsToRender[index]?.category}`}
                              className="text-blue-800"
                            >
                              {postsToRender[index]?.category}
                            </Link>
                            <span className="text-gray-500 text-sm">
                              {formatDate(postsToRender[index]?.createdAt)}
                            </span>
                          </div>
                          <Link
                            href={`/bai-viet/${postsToRender[index]?.slug}`}
                            className="text-base font-medium line-clamp-2"
                          >
                            {postsToRender[index]?.title}
                          </Link>
                        </div>
                        
                      </div>
                    )
                )}
              </div>
            </div>

            {/* Main Categories */}
            <MainCategories onCategorySelect={handleCategorySelect} />

            {/* Recent Posts */}
            <div className="my-2 px-4 lg:px-12">
              <PaginatedPosts posts={filteredPosts} postsPerPage={postsPerPage} />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

interface ServerSideResponse {
  posts: PostDetail[];
}

const limit = 8;

export const getServerSideProps: GetServerSideProps<ServerSideResponse> = async () => {
  try {
    const posts = await readPostsFromDb(limit, 0);
    const formattedPosts = formatPosts(posts);
    return {
      props: {
        posts: formattedPosts,
      },
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};

export default Blogs;