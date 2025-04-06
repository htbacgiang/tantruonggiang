import { useRouter } from "next/router";
import { projects } from "../../components/tantruonggiang/data/projects";
import PropertyDetail from "../../components/tantruonggiang/PropertyDetail";
import DefaultLayout from "../../components/layout/DefaultLayout";

// pages/du-an/[slug].js
import Head from "next/head";


export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-white">Dự án không tồn tại</div>;
  }

  // Dữ liệu cho SEO
  const pageTitle = `${project.title} | Thi công nội thất cao cấp`;
  const pageDescription = `Dự án ${project.title} - Khách hàng: ${project.customer}, Phong cách: ${project.style}, Loại hình: ${project.location}, Diện tích: ${project.area}. Xem chi tiết tại đây!`;
  const pageUrl = `https://yourwebsite.com/du-an/${project.slug}`; // Thay "yourwebsite.com" bằng domain của bạn
  const pageImage = project.image;

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: project.title,
    description: pageDescription,
    image: pageImage,
    author: {
      "@type": "Person",
      name: project.customer,
    },
    location: {
      "@type": "Place",
      name: project.location,
    },
    areaServed: project.area,
    url: pageUrl,
  };

  return (
    <DefaultLayout> 
      <Head>
        {/* Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content={`thi công nội thất, ${project.location}, ${project.style}, ${project.customer}, dự án nội thất, ${project.area}`}
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <PropertyDetail project={project} />
    </DefaultLayout>
  );
}