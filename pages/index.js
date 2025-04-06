// pages/index.js
import Image from "next/image";
import Head from "next/head";
import DefaultLayout from "../components/layout/DefaultLayout";
import SubscribeSection from "../components/about/SubscribeSection";
import AboutUsSection from "../components/about/AboutUsSection";
import OrganicProcess from "../components/about/OrganicProcess";
import Baner from "../components/common/Baner";
import Banner from "../components/common/Banner";
import EmbedLink from "../components/tantruonggiang/EmbedLink";
import Product3 from "../components/product/Products3";
import ProductHot from "../components/product/ProductHot";
import PostCard from "../components/common/PostCard";
import { readPostsFromDb, formatPosts } from "../lib/utils";
import CardProject from "../components/profiles/CardProject";
import EducationExperience from "../components/profiles/EducationExperience";
import Experience from "../components/profiles/Experience";
import ContactForm from "../components/profiles/ContactForm";
import BlogHero from "../components/profiles/BlogHero";
import PortfolioSection from "../components/profiles/PortfolioSection";
import ProfileHero from "../components/profiles/ProfileHero";
import TestimonialSection from "../components/profiles/TestimonialSection";
import DemoSection from "../components/profiles/DemoSection";
import AlbumShowcase from "../components/album/AlbumShowcase";
import AboutMe from "../components/profiles/AboutMe";
import DeviceShowcase from "../components/profiles/DeviceShowcase";
import DemoProduct from "../components/profiles/DemoProduct";
import WorkProcess from "../components/profiles/WorkProcess";
import NQWebHero from "../components/profiles/NQWebHero";
import ServicesSection from "../components/tantruonggiang/ServicesSection";
import FeaturedProjectsSection from "../components/tantruonggiang/FeaturedProjectsSection";
import StrengthsSection from "../components/tantruonggiang/StrengthsSection";
import BannerTTG from "../components/tantruonggiang/BannerTTG";
import FurnitureViewer from "../components/tantruonggiang/FurnitureViewer";
import FAQSection from "../components/tantruonggiang/FAQSection";
import Testimonials from "../components/tantruonggiang/Testimonials";


export default function Home({ posts }) {
  return (
    <DefaultLayout>
      <h1 className="hidden">
        Nội thất Tân Trường Giang - Thiết Kế & Thi Công Nội Thất Chuyên Nghiệp
      </h1>
      <Head>
        <title>Nội thất Tân Trường Giang - Thiết Kế & Thi Công Nội Thất Chuyên Nghiệp</title>
        <link rel="canonical" href="https://tantruonggiang.vn/" />

        <meta
          name="description"
          content="Nội thất Tân Trường Giang chuyên cung cấp dịch vụ thiết kế và thi công nội thất chuyên nghiệp cho chung cư, nhà ở. Tạo không gian sống sang trọng, hiện đại với nội thất gỗ công nghiệp cao cấp."
        />
        <meta name="author" content="Tân Trường Giang" />
        <meta name="keywords" content="nội thất Tân Trường Giang, thiết kế nội thất, thi công nội thất, nội thất chung cư, nội thất gỗ công nghiệp, không gian sống sang trọng" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Nội thất Tân Trường Giang - Thiết Kế & Thi Công Nội Thất Chuyên Nghiệp"
        />
        <meta
          property="og:description"
          content="Khám phá dịch vụ thiết kế và thi công nội thất chuyên nghiệp tại Tân Trường Giang. Tạo không gian sống đẳng cấp với nội thất gỗ công nghiệp cao cấp, phù hợp cho chung cư và nhà ở."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://tantruonggiang.vn/images/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://tantruonggiang.vn" />
      </Head>
      <BannerTTG />
      <ServicesSection />
      <FurnitureViewer />
      <FeaturedProjectsSection />
      <StrengthsSection />
      <FAQSection />
    <Testimonials />
      <BlogHero />
      <div className="container mx-auto p-3 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-6">
          {posts.slice(0, 8).map((post) => (
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
    return {
      props: {
        posts: formattedPosts,
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
}