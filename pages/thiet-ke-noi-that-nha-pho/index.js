// pages/thi-cong-noi-that-go-cong-nghiep.js
import Head from 'next/head';
import DefaultLayout from '../../components/layout/DefaultLayout';
import Image from 'next/image';
import Link from 'next/link';
import { formatPosts, readPostsFromDb } from '../../lib/utils';
import { useState } from "react";
import NhaphoPage from '../../components/tantruonggiang/NhaphoPage';

export default function ThiCongNoiThatGoCongNghiep({ relatedPosts, meta }) {
  // State và logic cho form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ và tên";
    if (!formData.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại";
    if (!formData.email.trim()) newErrors.email = "Vui lòng nhập email";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email không hợp lệ";
    if (!formData.message.trim()) newErrors.message = "Vui lòng nhập yêu cầu của bạn";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus("Đang gửi...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Gửi thông tin thành công!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setStatus(`Lỗi: ${error.message || "Đã xảy ra lỗi khi gửi form"}`);
    }
  };

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] md:h-[40vh]">
        <Image
          src="/images/noi-that-1.jpg"
          alt="Thiết Kế Nội Thất Nhà Phố - GreenLa Home"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-6 left-0 md:bottom-8 md:left-8 right-0 flex flex-col justify-end items-start text-white px-6 md:px-10 lg:px-16 pb-3">
          <nav aria-label="Breadcrumb">
            <p className="text-sm uppercase text-gray-300 mb-2">
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <Link href="/du-an" className="hover:underline">
                Dự án
              </Link>
            </p>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Thiết Kế Nội Thất Nhà Phố – GreenLa Home
          </h1>
          <p className="text-sm md:text-lg mt-2 max-w-2xl text-gray-200">
            Giải pháp hiện đại và tiết kiệm cho không gian sống sang trọng.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cột bài viết (3/4) */}
          <div className="w-full md:w-3/4">
            <NhaphoPage />
          </div>

          {/* Cột bài viết liên quan (1/4) và Form */}
          <aside className="w-full md:w-1/4">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Bài viết liên quan</h2>
              {relatedPosts.map((post, index) => (
                <div key={index} className="flex flex-col">
                  {post.thumbnail && (
                    <div className="w-full h-32 relative">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded hover:scale-105 transition-all ease duration-300"
                      />
                    </div>
                  )}
                  <div className="mt-2">
                    <Link href={`/bai-viet/${post.slug}`} className="text-blue-600 hover:underline">
                      {post.title}
                    </Link>
                    <p className="text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form đăng ký tư vấn - Sticky và căn giữa khi scroll */}
            <div className="mt-10 sticky top-[calc(60vh-50%)] bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-yellow-500 mb-2">ĐẶT LỊCH TƯ VẤN</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Họ và tên *"
                    className={`w-full p-3 bg-gray-700 text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3C31] ${
                      errors.name ? "border-red-500" : "border-none"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className={`w-full p-3 bg-gray-700 text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3C31] ${
                      errors.email ? "border-red-500" : "border-none"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Số điện thoại *"
                    className={`w-full p-3 bg-gray-700 text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3C31] ${
                      errors.phone ? "border-red-500" : "border-none"
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Yêu cầu của bạn"
                    className={`w-full p-3 bg-gray-700 text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3C31] ${
                      errors.message ? "border-red-500" : "border-none"
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={status === "Đang gửi..."}
                  className="w-full bg-yellow-500 text-black p-3 rounded-lg font-bold"
                >
                  GỬI THÔNG TIN <span>→</span>
                </button>
              </form>
              {status && (
                <p
                  className={`mt-2 text-center ${
                    status.includes("thành công") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const getServerSideProps = async () => {
  try {
    const posts = await readPostsFromDb(3, 0);
    const formattedPosts = formatPosts(posts);

    // Meta data tối ưu cho Thiết Kế Nội Thất Nhà Phố
    const meta = {
      title: "Thiết Kế Nội Thất Nhà Phố – GreenLa Home",
      description:
        "GreenLa Home cung cấp dịch vụ thiết kế nội thất nhà phố sang trọng, hiện đại, tối ưu không gian và chi phí cho gia đình Việt.",
      keywords:
        "thiết kế nội thất nhà phố, nội thất nhà phố, thiết kế nội thất, GreenLa Home, nội thất hiện đại",
      robots: "index, follow",
      author: "GreenLa Home",
      canonical: "https://greenlahome.vn/thi-cong-noi-that-go-cong-nghiep",
      og: {
        title: "GreenLa Home – Thiết Kế Nội Thất Nhà Phố Chuyên Nghiệp",
        description:
          "Khám phá dịch vụ thiết kế nội thất nhà phố từ GreenLa Home: sang trọng, hiện đại, tối ưu không gian và chi phí.",
        type: "website",
        image: "https://greenlahome.vn/images/noi-that-1.jpg",
        imageWidth: "1200",
        imageHeight: "630",
        url: "https://greenlahome.vn/thi-cong-noi-that-go-cong-nghiep",
      },
      twitter: {
        card: "summary_large_image",
        title: "Thiết Kế Nội Thất Nhà Phố – GreenLa Home",
        description:
          "Dịch vụ thiết kế nội thất nhà phố chuyên nghiệp từ GreenLa Home, tối ưu không gian, chi phí hợp lý.",
        image: "https://greenlahome.vn/images/noi-that-1.jpg",
      },
    };

    return {
      props: {
        relatedPosts: formattedPosts,
        meta,
      },
    };
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return {
      props: {
        relatedPosts: [],
        meta: {
          title: "Thiết Kế Nội Thất Nhà Phố – GreenLa Home",
          description:
            "Dịch vụ thiết kế nội thất nhà phố chuyên nghiệp từ GreenLa Home.",
          canonical: "https://greenlahome.vn/thi-cong-noi-that-go-cong-nghiep",
        },
      },
    };
  }
};