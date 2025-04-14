// pages/thi-cong-noi-that-go-cong-nghiep.js
import Head from 'next/head';
import DefaultLayout from '../../components/layout/DefaultLayout';
import Image from 'next/image';
import Link from 'next/link';
import { formatPosts, readPostsFromDb } from '../../lib/utils';
import { useState, useRef, useEffect } from "react"; // Thêm useRef, useEffect
import ThicongPage from '../../components/tantruonggiang/ThicongPage';

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
  const formRef = useRef(null); // Thêm ref cho form

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
        setErrors({});
        setTimeout(() => setStatus(""), 3000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setStatus(`Lỗi: ${error.message || "Đã xảy ra lỗi khi gửi form"}`);
    }
  };

  // Xử lý nhấp chuột bên ngoài form
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        // Reset form khi nhấp ra ngoài
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
        setStatus("");
      }
    };

    // Thêm sự kiện click vào document
    document.addEventListener("mousedown", handleClickOutside);

    // Gỡ sự kiện khi component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] md:h-[40vh]">
        <Image
          src="/images/noi-that-1.jpg"
          alt="Thi công nội thất trọn gói - GreenLa Home"
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
            Thi công nội thất trọn gói – GreenLa Home
          </h1>
          <p className="text-sm md:text-lg mt-2 max-w-2xl text-gray-200">
            Giải pháp hiện đại và tiết kiệm cho không gian sống sang trọng.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cột bài viết (3/4) */}
          <div className="w-full md:w-3/4">
            <ThicongPage />
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
            <div className="mt-10 sticky top-[calc(60vh-50%)] bg-gray-800 p-6 rounded-lg" ref={formRef}>
              <h2 className="text-xl font-bold text-yellow-500 mb-2">ĐẶT LỊCH TƯ VẤN</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Họ và tên *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Họ và tên *"
                    className={`w-full p-3 bg-gray-700 text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3C31] ${
                      errors.name ? "border-red-500" : "border-none"
                    }`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className={`w-full p-3 bg-gray-700 text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3C31] ${
                      errors.email ? "border-red-500" : "border-none"
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Số điện thoại *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Số điện thoại *"
                    className={`w-full p-3 bg-gray-700 text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3C31] ${
                      errors.phone ? "border-red-500" : "border-none"
                    }`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Yêu cầu của bạn</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Yêu cầu của bạn"
                    className={`w-full p-3 bg-gray-700 text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3C31] ${
                      errors.message ? "border-red-500" : "border-none"
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
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

    const meta = {
      title: "Thi Công Nội Thất Trọn Gói – GreenLa Home",
      description:
        "GreenLa Home cung cấp dịch vụ thi công nội thất trọn gói cho chung cư, nhà phố với giải pháp gỗ công nghiệp hiện đại, tối ưu chi phí và thẩm mỹ.",
      keywords:
        "thi công nội thất trọn gói, nội thất chung cư, nội thất nhà phố, nội thất gỗ công nghiệp, GreenLa Home, thiết kế nội thất",
      robots: "index, follow",
      author: "GreenLa Home",
      canonical: "https://greenlahome.vn/thi-cong-noi-that-tron-goi",
      og: {
        title: "GreenLa Home – Thi Công Nội Thất Trọn Gói Chuyên Nghiệp",
        description:
          "Khám phá dịch vụ thi công nội thất trọn gói từ GreenLa Home: chung cư, nhà phố, gỗ công nghiệp chất lượng cao, tối ưu chi phí.",
        type: "website",
        image: "https://greenlahome.vn/images/noi-that-1.jpg",
        imageWidth: "1200",
        imageHeight: "630",
        url: "https://greenlahome.vn/thi-cong-noi-that-tron-goi",
      },
      twitter: {
        card: "summary_large_image",
        title: "Thi Công Nội Thất Trọn Gói – GreenLa Home",
        description:
          "Dịch vụ thi công nội thất trọn gói chuyên nghiệp cho chung cư, nhà phố từ GreenLa Home, tối ưu chi phí và thẩm mỹ.",
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
          title: "Thi Công Nội Thất Trọn Gói – GreenLa Home",
          description: "Dịch vụ thi công nội thất trọn gói chuyên nghiệp từ GreenLa Home.",
          canonical: "https://greenlahome.vn/thi-cong-noi-that-tron-goi",
        },
      },
    };
  }
};