// components/tantruonggiang/Footer.js
import Image from "next/image";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaParking, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Cluster 1: Logo and Contact Info (Horizontal Row) */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/logo-tan-truong-giang.png"
                alt="Tân Trường Giang Logo"
                width={80}
                height={40}
                className="mr-2 cursor-pointer filter brightness-0 invert"
              />
            </div>

            {/* Contact Info (Horizontal) */}
            <ul className="flex flex-wrap items-center space-x-4 text-gray-300">
              <li className="flex items-center">
                <FaPhone className="text-orange-500 mr-2" />
                <span>096.292.2332</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-orange-500 mr-2" />
                <span>tantruonggiang.noithat@gmail.com

                </span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-orange-500 mr-2" />
                <div className="flex-col ">
                  <p>Thời gian mở cửa: 08:00 - 18:00 </p>
                  <span>(Làm việc cả thứ 7 & CN nghỉ)</span>
                </div>


              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-orange-500 mr-2" />
                <span>Số 10 lô C5, KDT Geleximco Lê Trọng Tấn</span>
              </li>

            </ul>
          </div>
        </div>

        {/* Cluster 2: Footer Columns and Map */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8 border-t border-gray-700 pt-6">
          {/* Column 1: Giới Thiệu */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Giới Thiệu</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/gioi-thieu" className="hover:text-orange-500">Về Tân Trường Giang</a></li>
              <li><a href="/lien-he" className="hover:text-orange-500">Liên hệ</a></li>
              <li><a href="/tuyen-dung" className="hover:text-orange-500">Tuyển dụng</a></li>
              <li><a href="/du-an" className="hover:text-orange-500">Dự án</a></li>
              <li><a href="/bai-viet" className="hover:text-orange-500">Tin tức</a></li>
            </ul>
          </div>

          {/* Column 2: Dịch Vụ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dịch Vụ</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/thiet-ke-noi-that-chung-cu" className="hover:text-orange-500">Thiết kế nội thất chung cư</a></li>
              <li><a href="/thiet-ke-noi-that-nha-pho" className="hover:text-orange-500">Thiết kế nội thất nhà phố</a></li>
              <li><a href="/thi-cong-noi-that-chung-cu" className="hover:text-orange-500">Thi công nội thất chung cư</a></li>
              <li><a href="/thi-cong-noi-that-nha-pho" className="hover:text-orange-500">Thi công nội thất nhà phố</a></li>

            </ul>
          </div>

          {/* Column 3: Sản Phẩm Gỗ Đặc Chọn */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sản Phẩm Gỗ Đặc Chọn</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-500">Giường gỗ đặc chọn</a></li>
              <li><a href="#" className="hover:text-orange-500">Bàn ghế gỗ đặc chọn</a></li>
              <li><a href="#" className="hover:text-orange-500">Sofa gỗ đặc chọn</a></li>
              <li><a href="#" className="hover:text-orange-500">Tủ bếp gỗ đặc chọn</a></li>
              <li><a href="#" className="hover:text-orange-500">Bàn trang điểm gỗ đặc chọn</a></li>
              <li><a href="#" className="hover:text-orange-500">Tủ quần áo gỗ đặc chọn</a></li>
              <li><a href="#" className="hover:text-orange-500">Kệ tivi gỗ đặc chọn</a></li>
            </ul>
          </div>

          {/* Column 4: Hỗ Trợ Khách Hàng */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hỗ Trợ Khách Hàng</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-500">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-orange-500">Chính sách sử dụng dịch vụ</a></li>
              <li><a href="#" className="hover:text-orange-500">Điều khoản sử dụng website</a></li>
              <li><a href="#" className="hover:text-orange-500">Chính sách sử dụng Cookie</a></li>
            </ul>
          </div>
          {/* Column 5: Bản Đồ (Embedded Google Map) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bản Đồ</h3>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14929.45062447485!2d105.84077260000001!3d20.69549305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135cbbd49100805%3A0xf7bd8a83a0cf059c!2zRWNvIELhuq9jIEdpYW5nIC0gTsO0bmcgVHLhuqFpIEjhu691IEPGoQ!5e0!3m2!1svi!2s!4v1743697165090!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <a
                  href="https://maps.app.goo.gl/eco-baogiang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500"
                >
                  Xem bản đồ lớn hơn
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Cluster 3: Social Media, Certifications, and Company Name */}
        <div className="border-t border-gray-700 pt-6 flex flex-col justify-center items-center">
          {/* Left: Social Media Icons */}
          {/* Right: Company Name */}
          <p className="text-gray-400 text-lg mb-2">
            CÔNG TY CỔ PHẦN KIẾN TRÚC NỘI THẤT TÂN TRƯỜNG GIANG
          </p>
          <div className="flex space-x-4 mb-3 md:mb-0">
            <a href="https://www.facebook.com/NoiThatTanTruongGiang" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white hover:text-orange-500 text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-orange-500 text-xl" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white hover:text-orange-500 text-xl" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-white hover:text-orange-500 text-xl" />
            </a>
          </div>


        </div>
      </div>
    </footer>
  );
}