import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Banner() {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slides (each slide has an image, heading, and description)
  const slides = [
    {
      image: "/images/banner4.jpg",
      smallHeading: "SANG TRỌNG VÀ ĐẲNG CẤP",
      heading: "Khám Phá Nội Thất Cho Không Gian Sống",
      description:
        "Nội thất Tân Trường Giang mang đến những thiết kế tinh tế, hiện đại, biến không gian sống của bạn thành một tác phẩm nghệ thuật.",
    },
    {
      image: "/images/banner5.jpg",
      smallHeading: "THIẾT KẾ HIỆN ĐẠI",
      heading: "Biến Ý Tưởng Thành Hiện Thực",
      description:
        "Chúng tôi cung cấp giải pháp thiết kế và thi công nội thất chuyên nghiệp, phù hợp với mọi phong cách sống.",
    },
    {
      image: "/images/banner6.jpg",
      smallHeading: "NỘI THẤT GỖ CAO CẤP",
      heading: "Tạo Nên Không Gian Sống Đẳng Cấp",
      description:
        "Sử dụng chất liệu gỗ công nghiệp cao cấp, Tân Trường Giang cam kết mang đến sản phẩm bền đẹp và tinh tế.",
    },
  ];

  // Auto-run functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  // Handle manual navigation
  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={slides[currentSlide].image}
          alt="Luxurious Living Room"
          layout="fill"
          objectFit="cover"
          className="brightness-75 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <p className="text-orange-200 text-xl font-bold uppercase tracking-widest mb-2">
          {slides[currentSlide].smallHeading}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {slides[currentSlide].heading}
        </h1>
        <p className="text-gray-300 text-sm md:text-lg max-w-4xl mx-auto mb-6">
          {slides[currentSlide].description}
        </p>
        <button className="flex items-center bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
          Tìm hiểu ngay
          <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 flex items-center z-10">
        <FaArrowLeft
          className="text-white text-2xl cursor-pointer hover:text-orange-500"
          onClick={goToPreviousSlide}
        />
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center z-10">
        <FaArrowRight
          className="text-white text-2xl cursor-pointer hover:text-orange-500"
          onClick={goToNextSlide}
        />
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-orange-500" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}