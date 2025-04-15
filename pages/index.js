import Head from "next/head";
import DefaultLayout from "../components/layout/DefaultLayout";
import BannerTTG from "../components/tantruonggiang/BannerTTG";
import ServicesSection from "../components/tantruonggiang/ServicesSection";
import FurnitureViewer from "../components/tantruonggiang/FurnitureViewer";
import FeaturedProjectsSection from "../components/tantruonggiang/FeaturedProjectsSection";
import StrengthsSection from "../components/tantruonggiang/StrengthsSection";
import FAQSection from "../components/tantruonggiang/FAQSection";
import Testimonials from "../components/tantruonggiang/Testimonials";
import BlogHero from "../components/profiles/BlogHero";
import PostCard from "../components/common/PostCard";
import { readPostsFromDb, formatPosts } from "../lib/utils";

export default function Home({ posts, meta }) {
  // JSON-LD Structured Data cho GreenLa Home
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GreenLa Home",
    "url": "https://greenlahome.vn",
    "logo": "https://greenlahome.vn/greenlahomelogo.png", // Cập nhật logo
    "sameAs": ["https://www.facebook.com/greenlahome"],
    "description":
      "GreenLa Home chuyên thiết kế và thi công nội thất chung cư, nhà phố, nội thất chọn gói gỗ công nghiệp chất lượng cao, tối ưu chi phí và thẩm mỹ.",
  };

  return (
    <DefaultLayout>
      <h1 className="hidden">
        GreenLa Home - Thiết Kế & Thi Công Nội Thất Chung Cư, Nhà Phố Chuyên Nghiệp
      </h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <BannerTTG />
      <ServicesSection />
      <FurnitureViewer />
      <FeaturedProjectsSection />
      <StrengthsSection />
      <FAQSection />
      <Testimonials />
      <BlogHero />
      <div className="container mx-auto p-3 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  try {
    const posts = await readPostsFromDb(8, 0);
    const formattedPosts = formatPosts(posts);

    // Meta data tối ưu cho GreenLa Home
    const meta = {
      title:
        "GreenLa Home - Thiết Kế & Thi Công Nội Thất Chung Cư, Nhà Phố, Nột Thất Gỗ Công Nghiệp",
      description:"Greenla Home – chuyên gia thiết kế và thi công nội thất chung cư, nhà phố, biệt thự. Chúng tôi mang đến không gian sống hiện đại, tối ưu, hợp phong thủy với chi phí hợp lý. Liên hệ ngay để biến ý tưởng thành hiện thực! Hotline: 0962922332.",
      keywords:
        "thiết kế nội thất, thi công nội thất, nội thất chung cư, nội thất nhà phố, nội thất gỗ công nghiệp, GreenLa Home",
      robots: "index, follow",
      author: "GreenLa Home",
      canonical: "https://greenlahome.vn",
      og: {
        title:
          "GreenLa Home - Giải Pháp Nội Thất Chung Cư, Nhà Phố & Nột Thất Gỗ Công Nghiệp",
      description:"Greenla Home – chuyên gia thiết kế và thi công nội thất chung cư, nhà phố, biệt thự. Chúng tôi mang đến không gian sống hiện đại, tối ưu, hợp phong thủy với chi phí hợp lý. Liên hệ ngay để biến ý tưởng thành hiện thực! Hotline: 0962922332.",

        type: "website",
        image: "https://greenlahome.vn/images/noi-that-1.jpg",
        imageWidth: "1200",
        imageHeight: "630",
        url: "https://greenlahome.vn",
      },
      twitter: {
        card: "summary_large_image",
        title: "GreenLa Home - Nội Thất Chung Cư, Nhà Phố Chuyên Nghiệp",
        description:"Greenla Home – chuyên gia thiết kế và thi công nội thất chung cư, nhà phố, biệt thự. Chúng tôi mang đến không gian sống hiện đại, tối ưu, hợp phong thủy với chi phí hợp lý. Liên hệ ngay để biến ý tưởng thành hiện thực! Hotline: 0962922332.",
        image: "https://greenlahome.vn/images/noi-that-1.jpg",
      },
    };

    return {
      props: {
        posts: formattedPosts,
        meta,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        posts: [],
        meta: {
          title: "GreenLa Home - Nội Thất Chung Cư, Nhà Phố Chuyên Nghiệp",
          description:"Greenla Home – chuyên gia thiết kế và thi công nội thất chung cư, nhà phố, biệt thự. Chúng tôi mang đến không gian sống hiện đại, tối ưu, hợp phong thủy với chi phí hợp lý. Liên hệ ngay để biến ý tưởng thành hiện thực! Hotline: 0962922332.",
          canonical: "https://greenlahome.vn",
        },
      },
    };
  }
}