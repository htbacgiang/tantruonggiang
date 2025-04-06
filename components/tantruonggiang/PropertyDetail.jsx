import Image from "next/image";
import Link from "next/link";
import { projects } from "../../components/tantruonggiang/data/projects";
import ServiceSection from "../../components/tantruonggiang/ServiceSection";
import { useState, useEffect } from "react";

const PropertyDetail = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const images = project.images || [project.image];

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

  // Function to get random projects
  const getRandomProjects = (projectsArray, count) => {
    const shuffled = [...projectsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Update featured projects only when the project.id changes
  useEffect(() => {
    const otherProjects = projects.filter((proj) => proj.id !== project.id);
    const randomProjects = getRandomProjects(otherProjects, 2);
    setFeaturedProjects(randomProjects);
  }, [project.id]);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="relative h-[60vh] w-full">
        <Image
          src={project.image}
          alt={`Hình ảnh chính của ${project.title}`}
          layout="fill"
          objectFit="cover"
          className="opacity-70 brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-6 md:p-10">
            <p className="text-sm uppercase text-gray-400">
              <Link href="/">
                <span className="hover:text-yellow-500 cursor-pointer">Trang chủ</span>
              </Link>{" "}
              /{" "}
              <Link href="/du-an">
                <span className="hover:text-yellow-500 cursor-pointer">Dự án</span>
              </Link>{" "}
              / {project.title}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">{project.title}</h1>
            <p className="text-lg md:text-xl text-white mt-2">
              Thi công nội thất cao cấp tại {project.location} – {project.customer}
            </p>
            <p className="text-yellow-500 text-lg md:text-xl mt-1">– {project.customer}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row mt-4">
          <div className="md:w-3/4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">★</span>
                  <p>Khách hàng: {project.customer}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">🏠</span>
                  <p>Phong cách: {project.style}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">📍</span>
                  <p>Địa điểm: {project.location}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">📏</span>
                  <p>Diện tích: {project.area}</p>
                </div>
              </div>
            </div>

            <div className="relative mt-4">
              <Image
                src={images[currentImage]}
                alt={`Hình ảnh ${currentImage + 1} của ${project.title}`}
                width={800}
                height={400}
                className="w-full h-96 object-cover rounded-lg"
              />
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-black p-2 rounded-full"
              >
                ←
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-black p-2 rounded-full"
              >
                →
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      currentImage === index ? "bg-yellow-500" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-4">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Hình ảnh phụ ${index + 1} của ${project.title}`}
                  width={200}
                  height={100}
                  className="w-full h-24 object-cover rounded-lg cursor-pointer"
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>

          <div className="md:w-1/4 md:ml-6 mt-6 md:mt-0">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-yellow-500 mb-2">ĐẶT LỊCH TƯ VẤN</h2>
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
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

            <div className="mt-6">
              <h2 className="text-xl font-bold text-yellow-500">Dự án tiêu biểu</h2>
              <div className="mt-4 space-y-4">
                {featuredProjects.map((featuredProject) => (
                  <Link
                    key={featuredProject.id}
                    href={`/du-an/${featuredProject.slug}`}
                    className="flex flex-col items-center hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      width={300}
                      height={180}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <p className="text-gray-400 text-center mt-2">{featuredProject.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceSection />
    </div>
  );
};

export default PropertyDetail;