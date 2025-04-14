// pages/AboutUs.js
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import SeumenhTTG from "../../components/tantruonggiang/SumenhTTG";
import ConsultationForm from "../../components/tantruonggiang/ConsultationForm";
import Testimonials from "../../components/tantruonggiang/Testimonials";

export default function AboutUs({ meta }) {
  // State to control whether the animation should run
  const [runAnimation, setRunAnimation] = useState(false);

  // Run the animation only once on component mount
  useEffect(() => {
    setRunAnimation(true);
  }, []);

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/noi-that-1.jpg"
            alt="Về Chúng Tôi - Nội thất GreenLa Home"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Về Chúng Tôi</h1>
          <nav aria-label="Breadcrumb" className="text-gray-300">
            <Link href="/">
              <span className="hover:text-orange-500 cursor-pointer">
                Trang Chủ
              </span>
            </Link>
            <span className="mx-2">/</span>
            <span>Về Chúng Tôi</span>
          </nav>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Grid Layout for Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Text Content and Image 1 */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <p className="text-orange-500 text-sm uppercase tracking-widest mb-2">
                  CHÚNG TÔI THIẾT KẾ
                </p>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                  Nội Thất Hiện Đại Cho Sự Tiện Nghi Tối Ưu
                </h2>
                <p className="text-gray-300 text-sm md:text-lg mb-6">
                  Tại Nội thất GreenLa Home, chúng tôi cam kết mang đến những
                  thiết kế nội thất tinh tế, hiện đại và tiện nghi. Với đội ngũ
                  chuyên gia giàu kinh nghiệm, chúng tôi tạo ra không gian sống
                  hoàn hảo, phù hợp với mọi phong cách và nhu cầu của bạn.
                </p>
              </div>
              {/* Image 1 (Bottom-Left) */}
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/noi-that-1.jpg"
                  alt="Thiết Kế Nội Thất GreenLa Home"
                  layout="fill"
                  objectFit="cover"
                  className={`brightness-75 ${
                    runAnimation ? "animate-slide-in-from-right" : ""
                  }`}
                />
              </div>
            </div>

            {/* Right Column: Image 2 and Features */}
            <div className="space-y-6">
              {/* Image 2 (Top-Right) */}
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/noi-that-2.jpg"
                  alt="Nội Thất Cao Cấp GreenLa Home"
                  layout="fill"
                  objectFit="cover"
                  className={`brightness-75 ${
                    runAnimation ? "animate-slide-in-from-left" : ""
                  }`}
                />
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Chất Lượng Nội Thất Đỉnh Cao
                </h2>
                <p className="text-gray-300 text-sm md:text-lg mb-4">
                  Chúng tôi sử dụng chất liệu cao cấp và quy trình sản xuất hiện
                  đại để đảm bảo mỗi sản phẩm đều đạt tiêu chuẩn cao nhất.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <FaCheckCircle className="text-orange-500 mr-2" />
                    Sử dụng gỗ công nghiệp cao cấp, bền đẹp theo thời gian.
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheckCircle className="text-orange-500 mr-2" />
                    Thiết kế hiện đại, phù hợp với mọi không gian sống.
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheckCircle className="text-orange-500 mr-2" />
                    Quy trình thi công chuyên nghiệp, đảm bảo tiến độ.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SeumenhTTG />
        <Testimonials />
        <ConsultationForm />
      </section>
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  const meta = {
    title: "Về Chúng Tôi – Nội thất GreenLa Home",
    description:
      "Tìm hiểu về Nội thất GreenLa Home – chuyên gia thiết kế và thi công nội thất cao cấp, mang đến không gian sống sang trọng, tiện nghi cho gia đình Việt.",
    keywords:
      "về chúng tôi, nội thất GreenLa Home, thiết kế nội thất, thi công nội thất, nội thất cao cấp",
    author: "Nội thất GreenLa Home",
    robots: "index, follow",
    canonical: "https://greenlahome.vn/gioi-thieu",
    og: {
      title: "Về Chúng Tôi – Nội thất GreenLa Home",
      description:
        "Khám phá Nội thất GreenLa Home – đơn vị thiết kế và thi công nội thất cao cấp, tạo nên không gian sống sang trọng, tiện nghi.",
      type: "website",
      image: "https://greenlahome.vn/images/noi-that-1.jpg",
      imageWidth: "1200",
      imageHeight: "630",
      url: "https://greenlahome.vn/gioi-thieu",
      siteName: "Nội thất GreenLa Home",
      locale: "vi_VN",
    },
    twitter: {
      card: "summary_large_image",
      title: "Về Chúng Tôi – Nội thất GreenLa Home",
      description:
        "Nội thất GreenLa Home – chuyên thiết kế, thi công nội thất cao cấp, mang đến không gian sống sang trọng.",
      image: "https://greenlahome.vn/images/noi-that-1.jpg",
      site: "@TanTruongGiang", // Thay bằng handle thật nếu có
    },
  };

  return {
    props: {
      meta,
    },
  };
}