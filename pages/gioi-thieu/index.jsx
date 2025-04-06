// pages/AboutUs.js
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { FaCheckCircle, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import SeumenhTTG from "../../components/tantruonggiang/SumenhTTG";
import ConsultationForm from "../../components/tantruonggiang/ConsultationForm";
import Testimonials from "../../components/tantruonggiang/Testimonials";

export default function AboutUs() {
  // State to control whether the animation should run
  const [runAnimation, setRunAnimation] = useState(false);

  // Run the animation only once on component mount
  useEffect(() => {
    setRunAnimation(true);
  }, []);

  return (
    <DefaultLayout>
      {/* SEO Metadata */}
      <Head>
        <title>Về Chúng Tôi - Nội thất Tân Trường Giang</title>
        <meta
          name="description"
          content="Tìm hiểu về Nội thất Tân Trường Giang - chuyên thiết kế và thi công nội thất cao cấp, mang đến không gian sống sang trọng và tiện nghi cho gia đình bạn."
        />
        <meta name="keywords" content="về chúng tôi, nội thất Tân Trường Giang, thiết kế nội thất, thi công nội thất" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Về Chúng Tôi - Nội thất Tân Trường Giang"
        />
        <meta
          property="og:description"
          content="Tìm hiểu về Nội thất Tân Trường Giang - chuyên thiết kế và thi công nội thất cao cấp, mang đến không gian sống sang trọng và tiện nghi cho gia đình bạn."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://tantruonggiang.vn/images/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://tantruonggiang.vn/about-us" />
        {/* Custom CSS for Animations */}
        <style jsx global>{`
          @keyframes slideInFromRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInFromLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slide-in-from-right {
            animation: slideInFromRight 1s ease-out forwards;
          }

          .animate-slide-in-from-left {
            animation: slideInFromLeft 1s ease-out forwards;
          }
        `}</style>
      </Head>

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/noi-that-1.jpg"
            alt="About Us Hero"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Về Chúng Tôi</h1>
          <div className="text-gray-300">
            <Link href="/">
              <span className="hover:text-orange-500 cursor-pointer">
                Trang Chủ
              </span>
            </Link>
            <span className="mx-2">/</span>
            <span>Về Chúng Tôi</span>
          </div>
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
                  Nội Thất Đẳng Cấp Thế Giới Cho Sự Tiện Nghi Tối Ưu
                </h2>
                <p className="text-gray-300 text-sm md:text-lg mb-6">
                  Tại Nội thất Tân Trường Giang, chúng tôi cam kết mang đến những
                  thiết kế nội thất tinh tế, hiện đại và tiện nghi. Với đội ngũ
                  chuyên gia giàu kinh nghiệm, chúng tôi tạo ra không gian sống
                  hoàn hảo, phù hợp với mọi phong cách và nhu cầu của bạn.
                </p>
              </div>
              {/* Image 1 (Bottom-Left) */}
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/noi-that-1.jpg"
                  alt="Living Room 1"
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
                  alt="Living Room 2"
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