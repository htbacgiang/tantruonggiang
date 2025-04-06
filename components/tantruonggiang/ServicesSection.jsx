import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="bg-gray-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Tiêu đề và mô tả */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 uppercase">
            Dịch Vụ Tại Tân Trường Giang Có Gì?
          </h2>
          <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Đội ngũ Tân Trường Giang mang trong mình khát vọng tạo ra những không gian sống tinh tế, sang trọng và đầy chất cá nhân, đáp ứng mọi nhu cầu thẩm mỹ và công năng của khách hàng. Chúng tôi không chỉ chú trọng đến sự hoàn hảo trong từng chi tiết mà còn mong muốn mang lại niềm hạnh phúc và sự hài lòng trọn vẹn cho khách hàng.
          </p>
        </div>

        {/* Grid 3 cột */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Cột 1: Thiết Kế Nội Thất */}
          <div className="flex flex-col items-center group">
            <div className="relative w-full h-48 md:h-64">
              <Image
                src="/images/thiet-ke-noi-that-hien-dai-1-768x576.jpg" // Thay bằng đường dẫn đến hình ảnh của bạn
                alt="Thiết Kế Nội Thất"
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-opacity duration-300 group-hover:opacity-70"
              />
              {/* Overlay và nút Xem chi tiết */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/thiet-ke-noi-that">
                  <button className="bg-yellow-400 text-black font-semibold text-sm md:text-base py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors duration-200">
                    Xem chi tiết
                  </button>
                </Link>
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mt-4 uppercase">
              Thiết Kế Nội Thất
            </h3>
            <p className="text-gray-300 text-sm md:text-base text-center mt-2">
              Tân Trường Giang mang đến giải pháp thiết kế nội thất sang trọng, hiện đại và tối ưu không gian sống dành riêng cho chung cư, tạo ra không gian sống đẳng cấp cho khách hàng.
            </p>
          </div>

          {/* Cột 2: Thi Công Nội Thất */}
          <div className="flex flex-col items-center group">
            <div className="relative w-full h-48 md:h-64">
              <Image
                src="/images/thi-cong-noi-that-768x576.png" // Thay bằng đường dẫn đến hình ảnh của bạn
                alt="Thi Công Nội Thất"
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-opacity duration-300 group-hover:opacity-70"
              />
              {/* Overlay và nút Xem chi tiết */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/thi-cong-noi-that">
                  <button className="bg-yellow-400 text-black font-semibold text-sm md:text-base py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors duration-200">
                    Xem chi tiết
                  </button>
                </Link>
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mt-4 uppercase">
              Thi Công Nội Thất
            </h3>
            <p className="text-gray-300 text-sm md:text-base text-center mt-2">
              Chúng tôi cung cấp dịch vụ thi công nội thất trọn gói với quy trình chuyên nghiệp, đảm bảo tiến độ và chất lượng, mang lại sự yên tâm tối đa cho khách hàng.
            </p>
          </div>

          {/* Cột 3: Nội Thất Gỗ Công Nghiệp */}
          <div className="flex flex-col items-center group">
            <div className="relative w-full h-48 md:h-64">
              <Image
                src="/images/noi-that-go-cong-nghiep-768x576.jpg" // Thay bằng đường dẫn đến hình ảnh của bạn
                alt="Nội Thất Gỗ Công Nghiệp"
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-opacity duration-300 group-hover:opacity-70"
              />
              {/* Overlay và nút Xem chi tiết */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/noi-that-go-cong-nghiep">
                  <button className="bg-yellow-400 text-black font-semibold text-sm md:text-base py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors duration-200">
                    Xem chi tiết
                  </button>
                </Link>
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mt-4 uppercase">
              Nội Thất Gỗ Công Nghiệp
            </h3>
            <p className="text-gray-300 text-sm md:text-base text-center mt-2">
              Toàn bộ sản phẩm nội thất của Tân Trường Giang được sản xuất từ gỗ công nghiệp cao cấp, nhập khẩu trực tiếp từ Mỹ, đảm bảo độ bền và thẩm mỹ vượt trội.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}