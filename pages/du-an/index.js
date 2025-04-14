// pages/du-an/index.js
import ProjectCard from "../../components/tantruonggiang/ProjectCard";
import { projects } from "../../components/tantruonggiang/data/projects";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../../components/layout/DefaultLayout";
import ContactForm from "../../components/header/ContactForm"; // Import ContactForm

export default function DuAn({ meta = {} }) {
  const [filter, setFilter] = useState("all");
  const [isFormOpen, setIsFormOpen] = useState(false); // State for modal
  const modalRef = useRef(null); // Ref for focus trapping

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "biet-thu") return project.location === "Biệt thự";
    if (filter === "chung-cu") return project.location === "Chung cư";
    if (filter === "nha-pho") return project.location === "Nhà phố";
    return true;
  });

  // Toggle form visibility
  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  // Focus trapping and escape key handling
  useEffect(() => {
    if (!isFormOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") toggleForm();
    };

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    firstElement?.focus();
    modal.addEventListener("keydown", handleTab);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      modal.removeEventListener("keydown", handleTab);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFormOpen]);

  // Meta mặc định nếu không có meta từ props
  const defaultMeta = {
    title: "Danh Sách Dự Án – GreenLa Home",
    description:
      "Khám phá danh sách dự án thi công nội thất cao cấp của GreenLa Home, từ biệt thự, nhà phố đến chung cư. Tất cả đều mang phong cách thiết kế hiện đại, sang trọng, tối ưu không gian và chi phí, đáp ứng mọi nhu cầu của gia đình Việt.",
    keywords:
      "dự án nội thất, thi công nội thất, GreenLa Home, biệt thự, nhà phố, chung cư, thiết kế nội thất",
    author: "GreenLa Home",
    robots: "index, follow",
    canonical: "https://greenlahome.vn/du-an",
    og: {
      title: "Danh Sách Dự Án Nội Thất – GreenLa Home",
      description:
        "Khám phá danh sách dự án thi công nội thất cao cấp của GreenLa Home, từ biệt thự, nhà phố đến chung cư. Tất cả đều mang phong cách thiết kế hiện đại, sang trọng, tối ưu không gian và chi phí, đáp ứng mọi nhu cầu của gia đình Việt.",
      type: "website",
      image: "/images/noi-that-1.jpg",
      imageWidth: "1200",
      imageHeight: "630",
      url: "https://greenlahome.vn/du-an",
      siteName: "GreenLa Home",
      locale: "vi_VN",
    },
    twitter: {
      card: "summary_large_image",
      title: "Danh Sách Dự Án – GreenLa Home",
      description:
        "Khám phá danh sách dự án thi công nội thất cao cấp của GreenLa Home, từ biệt thự, nhà phố đến chung cư. Tất cả đều mang phong cách thiết kế hiện đại, sang trọng, tối ưu không gian và chi phí, đáp ứng mọi nhu cầu của gia đình Việt.",
      image: "/images/noi-that-1.jpg",
      site: "@GreenLaHome",
    },
  };

  // Gộp meta từ props với defaultMeta
  const safeMeta = { ...defaultMeta, ...meta };

  // JSON-LD Structured Data với Breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: safeMeta.title,
    description: safeMeta.description,
    url: safeMeta.canonical,
    image: safeMeta.og.image,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: "https://greenlahome.vn",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Dự án",
          item: safeMeta.canonical,
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: (projects || []).map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://greenlahome.vn/du-an/${project.slug}`,
        name: project.title,
        image: project.image,
      })),
    },
  };

  return (
    <DefaultLayout>
      <Head>
        <title>{safeMeta.title}</title>
        <meta name="description" content={safeMeta.description} />
        <meta name="keywords" content={safeMeta.keywords} />
        <meta name="author" content={safeMeta.author} />
        <meta name="robots" content={safeMeta.robots} />
        <link rel="canonical" href={safeMeta.canonical} />
        <meta property="og:title" content={safeMeta.og.title} />
        <meta property="og:description" content={safeMeta.og.description} />
        <meta property="og:type" content={safeMeta.og.type} />
        <meta property="og:image" content={safeMeta.og.image} />
        <meta property="og:image:width" content={safeMeta.og.imageWidth} />
        <meta property="og:image:height" content={safeMeta.og.imageHeight} />
        <meta property="og:url" content={safeMeta.og.url} />
        <meta property="og:site_name" content={safeMeta.og.siteName} />
        <meta property="og:locale" content={safeMeta.og.locale} />
        <meta name="twitter:card" content={safeMeta.twitter.card} />
        <meta name="twitter:title" content={safeMeta.twitter.title} />
        <meta name="twitter:description" content={safeMeta.twitter.description} />
        <meta name="twitter:image" content={safeMeta.twitter.image} />
        <meta name="twitter:site" content={safeMeta.twitter.site} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[50vh] w-full">
          <Image
            src={safeMeta.og.image}
            alt="Dự Án Nội Thất - GreenLa Home"
            layout="fill"
            objectFit="cover"
            className="opacity-70 brightness-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="p-6 md:p-10">
              <nav aria-label="Breadcrumb">
                <p className="text-sm uppercase text-gray-400">
                  <Link href="/">
                    <span className="hover:text-yellow-500 cursor-pointer">
                      Trang chủ
                    </span>
                  </Link>{" "}
                  / Dự án
                </p>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Các dự án thi công nội thất GreenLa Home
              </h1>
              <p className="text-lg md:text-xl text-white mt-2">
                Khám phá các dự án thiết kế và thi công nội thất cao cấp, mang
                phong cách hiện đại và sang trọng.
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
                <ProjectCard
                  key={project.id}
                  project={project}
                  onQuoteClick={toggleForm}
                />
              ))
            ) : (
              <p className="text-gray-400">Không có dự án nào phù hợp.</p>
            )}
          </div>
        </div>

        {/* Registration Form Modal */}
        {isFormOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) toggleForm();
            }}
          >
            <div
              ref={modalRef}
              className="rounded-lg w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-5xl relative bg-white"
            >
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={toggleForm}
                aria-label="Đóng form"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* Registration Form */}
              <ContactForm />
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  try {
    const projectImage = projects?.[0]?.image || "/images/noi-that-1.jpg";

    const meta = {
      title: "Danh Sách Dự Án – GreenLa Home",
      description:
        "Khám phá danh sách dự án thi công nội thất cao cấp của GreenLa Home, từ biệt thự, nhà phố đến chung cư. Tất cả đều mang phong cách thiết kế hiện đại, sang trọng, tối ưu không gian và chi phí, đáp ứng mọi nhu cầu của gia đình Việt.",
      keywords:
        "dự án nội thất, thi công nội thất, GreenLa Home, biệt thự, nhà phố, chung cư, thiết kế nội thất",
      author: "GreenLa Home",
      robots: "index, follow",
      canonical: "https://greenlahome.vn/du-an",
      og: {
        title: "Danh Sách Dự Án Nội Thất – GreenLa Home",
        description:
          "Xem các dự án thi công nội thất cao cấp từ GreenLa Home: biệt thự, nhà phố, chung cư với thiết kế hiện đại, sang trọng, tối ưu không gian sống.",
        type: "website",
        image: projectImage,
        imageWidth: "1200",
        imageHeight: "630",
        url: "https://greenlahome.vn/du-an",
        siteName: "GreenLa Home",
        locale: "vi_VN",
      },
      twitter: {
        card: "summary_large_image",
        title: "Danh Sách Dự Án – GreenLa Home",
        description:
          "Danh sách dự án nội thất cao cấp của GreenLa Home: biệt thự, nhà phố, chung cư, thiết kế hiện đại.",
        image: projectImage,
        site: "@GreenLaHome",
      },
    };

    return {
      props: {
        meta,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      props: {
        meta: {
          title: "Danh Sách Dự Án – GreenLa Home",
          description:
            "Xem các dự án thi công nội thất cao cấp từ GreenLa Home: biệt thự, nhà phố, chung cư với thiết kế hiện đại, sang trọng, tối ưu không gian sống.",
          canonical: "https://greenlahome.vn/du-an",
        },
      },
    };
  }
}