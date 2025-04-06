import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export default function FeaturedProjectsSection() {
  return (
    <section className="bg-gray-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Tiêu đề và mô tả */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 uppercase">
            Dự Án Nổi Bật
          </h2>
          <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Mỗi dự án của Tân Trường Giang là một hành trình sáng tạo độc đáo, thể hiện cá tính và mong muốn của khách hàng. Hãy cùng khám phá những dự án nổi bật của chúng tôi, nơi mỗi chi tiết đều được chăm chút tỉ mỉ mang đến không gian sống đẳng cấp và tiện nghi cho từng khách hàng.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hình ảnh chính (bên trái) */}
          <div className="lg:col-span-2 relative group">
            <Link href="/du-an/du-an-anh-dat-ung-hoa-nha-pho-90m2" className="block">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src="/product/biet-thu/noi-that-biet-thu (4).jpg"
                  alt="Dự án nổi bật chính"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-opacity duration-300 group-hover:opacity-70"
                />
                {/* Nút Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white bg-opacity-30 rounded-full p-4 hover:bg-opacity-50 transition-all duration-300">
                    <FaPlay className="text-white text-xl" />
                  </button>
                </div>
              </div>
            </Link>
            {/* Tiêu đề cho ảnh chính */}
            <h3 className="text-sm md:text-base font-semibold text-gray-300 mt-4">
              Thiết kế nội thất biệt thự sang trọng tại Hà Nội
            </h3>
          </div>

          {/* Hai hình ảnh nhỏ (bên phải) */}
          <div className="flex flex-col gap-6">
            {/* Dự án 1 */}
            <div className="group">
              <Link href="/du-an/du-an-anh-chung-cu-chi-my-smart-city" className="block">
                <div className="relative w-full h-48 md:h-64">
                  <Image
                    src="/product/chung-cu-vinhomes/thiet-ke-chung-cu-3-ngu-vinhome (7).jpg"
                    alt="Dự án 1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-opacity duration-300 group-hover:opacity-70"
                  />
                </div>
              </Link>
              <h3 className="text-sm md:text-base font-semibold text-gray-300 mt-4">
                Thi công nội thất gỗ hiện đại tại chung cư Vinhomes
              </h3>
            </div>

            {/* Dự án 2 */}
            <div className="group">
              <Link href="/du-an/thiet-ke-noi-that-chung-cu-van-phu-victoria-van-phu" className="block">
                <div className="relative w-full h-48 md:h-64">
                  <Image
                    src="/product/van-phu-victoria/Thiet-ke-chung-cu-3-ngu-Van-Phu-Victoria-7.jpg"
                    alt="Dự án 2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-opacity duration-300 group-hover:opacity-70"
                  />
                </div>
              </Link>
              <h3 className="text-sm md:text-base font-semibold text-gray-300 mt-4">
                Nội thất gỗ hiện đại cho chung cư Văn Phú Victoria
              </h3>
            </div>
          </div>
        </div>

        {/* Nút Trải nghiệm thực tế */}
        <div className="text-right mt-6">
          <Link href="/du-an">
            <button className="text-yellow-400 font-semibold uppercase flex items-center gap-2 hover:text-yellow-500 transition-colors duration-200">
              Trải nghiệm thực tế
              <span className="text-yellow-400">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}