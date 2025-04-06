// pages/du-an/index.js
import ProjectCard from "../../components/tantruonggiang/ProjectCard";
import { projects } from "../../components/tantruonggiang/data/projects";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image"; // Thêm import Image từ next/image
import DefaultLayout from "../../components/layout/DefaultLayout";

export default function DuAn() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "biet-thu") return project.location === "Biệt thự";
    if (filter === "chung-cu") return project.location === "Chung cư";
    if (filter === "nha-pho") return project.location === "Nhà phố";
    return true;
  });

  // Dữ liệu cho SEO
  const pageTitle = "Danh sách dự án | Thi công nội thất Tân Trường Giang";
  const pageDescription =
    "Khám phá danh sách các dự án thi công nội thất cao cấp, bao gồm biệt thự, nhà phố, và chung cư. Xem chi tiết các dự án với thiết kế hiện đại và sang trọng.";
  const pageUrl = "https://yourwebsite.com/du-an"; // Thay "yourwebsite.com" bằng domain của bạn
  const pageImage = projects[0]?.image || "/images/default-image.jpg"; // Thêm hình ảnh mặc định nếu không có dự án

  // JSON-LD Structured Data với Breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    image: pageImage,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: "https://yourwebsite.com",
        },
        {
          "@type": "ListItem",
          position: "2",
          name: "Dự án",
          item: pageUrl,
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://yourwebsite.com/du-an/${project.slug}`,
        name: project.title,
        image: project.image,
      })),
    },
  };

  return (
    <DefaultLayout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="dự án nội thất, thi công nội thất, biệt thự, nhà phố, chung cư, thiết kế nội thất hiện đại, nội thất cao cấp"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full">
          {/* Background Image */}
          <Image
            src={pageImage}
            alt="Hình ảnh dự án nổi bật - Tân Trường Giang"
            layout="fill"
            objectFit="cover"
            className="opacity-70 brightness-75"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="p-6 md:p-10">
              {/* Breadcrumbs */}
              <p className="text-sm uppercase text-gray-400">
                <Link href="/">
                  <span className="hover:text-yellow-500 cursor-pointer">
                    Trang chủ
                  </span>
                </Link>{" "}
                / Dự án
              </p>
              {/* Tiêu đề */}
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Các dự án thi công nội thất Tân Trường Giang
              </h1>
              {/* Mô tả ngắn */}
              <p className="text-lg md:text-xl text-white mt-2">
                Khám phá các dự án thiết kế và thi công nội thất cao cấp, mang phong cách hiện đại và sang trọng.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto p-6">
          {/* Filter Buttons */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setFilter("all")}
              className={`pb-1 ${
                filter === "all"
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-gray-400"
              }`}
            >
              Xem tất cả
            </button>
            <button
              onClick={() => setFilter("biet-thu")}
              className={`pb-1 ${
                filter === "biet-thu"
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-gray-400"
              }`}
            >
              Biệt thự
            </button>
            <button
              onClick={() => setFilter("chung-cu")}
              className={`pb-1 ${
                filter === "chung-cu"
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-gray-400"
              }`}
            >
              Chung cư
            </button>
            <button
              onClick={() => setFilter("nha-pho")}
              className={`pb-1 ${
                filter === "nha-pho"
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-gray-400"
              }`}
            >
              Nhà phố
            </button>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p className="text-gray-400">Không có dự án nào phù hợp.</p>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}