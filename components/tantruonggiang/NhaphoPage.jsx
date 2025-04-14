// components/ArticlePage.js
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '../header/ContactForm';
import { useState } from 'react';

export default function NhaphoPage() {
  // Trạng thái để điều khiển hiển thị popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Hàm xử lý mở/đóng popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <article className="max-w-full text-base">
      {/* Article Content */}
      <section className="prose max-w-none">
        {/* Phần 1: Vì sao cần một đơn vị thiết kế nội thất nhà phố chuyên nghiệp */}
        <div className="">
          <h2>1. Vì sao cần một đơn vị thiết kế nội thất nhà phố chuyên nghiệp</h2>
          <p>
            Nhà phố với đặc trưng diện tích hạn chế và bố cục nhiều tầng luôn đặt ra thách thức lớn trong việc tạo nên không gian sống vừa đẹp mắt, vừa tiện nghi. Việc tự thiết kế nội thất thường dẫn đến bố trí thiếu khoa học, lãng phí không gian hoặc không đáp ứng được nhu cầu thẩm mỹ và công năng. Đây chính là lý do bạn nên chọn một đơn vị thiết kế nội thất nhà phố chuyên nghiệp như Greenla Home để biến tổ ấm của mình thành không gian lý tưởng.
          </p>
          <p>
            Tối ưu không gian sống là lợi ích đầu tiên khi hợp tác với đơn vị chuyên nghiệp. Nhà phố thường có diện tích nhỏ (30-100m²) hoặc bố cục phức tạp với gác lửng, cầu thang hẹp. Các kiến trúc sư giàu kinh nghiệm tại Greenla Home sẽ khảo sát thực tế, đưa ra giải pháp bố trí thông minh như sử dụng tủ âm tường, giường đa năng hay vách ngăn CNC, giúp tận dụng từng mét vuông mà vẫn tạo cảm giác rộng rãi, thoáng đãng.
          </p>
          <p>
            Đảm bảo thẩm mỹ và phong cách riêng là yếu tố quan trọng tiếp theo. Một đơn vị chuyên nghiệp không chỉ thiết kế theo xu hướng mà còn cá nhân hóa theo sở thích gia chủ. Dù bạn yêu thích phong cách hiện đại, Scandinavian hay Luxury, Greenla Home sẽ phối hợp màu sắc, vật liệu và nội thất gỗ công nghiệp cao cấp (MDF chống ẩm An Cường) để tạo nên không gian hài hòa, tinh tế, thể hiện gu thẩm mỹ độc đáo.
          </p>
          <p>
            Tiết kiệm thời gian và chi phí cũng là lợi ích không thể bỏ qua. Tự thiết kế có thể dẫn đến sai sót như chọn vật liệu kém chất lượng, bố trí bất hợp lý, gây tốn kém sửa chữa. Với quy trình chuyên nghiệp, Greenla Home cung cấp bản vẽ 3D chi tiết, giúp bạn hình dung rõ ràng không gian trước khi thi công, tránh phát sinh không mong muốn. Hơn nữa, đội ngũ của chúng tôi tư vấn giải pháp phù hợp ngân sách, đảm bảo hiệu quả tối ưu.
          </p>
        </div>
        {/* Hình ảnh sau phần Giới thiệu */}
        <div className="my-8">
          <Image
            src="/images/noi-that-nha-pho-truoc-sau.jpg"
            alt="Thiết kế nội thất nhà phố chuyên nghiệp Greenla Home tối ưu không gian nhỏ"
            width={800}
            height={600}
            className="rounded"
          />
        </div>

        {/* Phần 2: Các mẫu thiết kế nội thất nhà phố theo diện tích */}
        <h2>2. Các mẫu thiết kế nội thất nhà phố theo diện tích</h2>
        <p>
          Nhà phố với diện tích đa dạng từ nhỏ gọn đến rộng rãi đòi hỏi những ý tưởng thiết kế phù hợp để tối ưu không gian và đáp ứng nhu cầu sử dụng. Tại Greenla Home, chúng tôi mang đến các mẫu thiết kế nội thất nhà phố được cá nhân hóa theo từng diện tích, sử dụng nội thất gỗ công nghiệp chất lượng cao (MDF chống ẩm An Cường, phủ Melamine/Laminate) để đảm bảo tính thẩm mỹ, công năng và chi phí hợp lý.
        </p>
        <h3>2.1 Nhà phố 30m² – Tối giản và hiện đại</h3>
        <ul>
          <li><strong>Phong cách:</strong> Tối giản, hiện đại.</li>
          <li><strong>Bố cục:</strong> Không gian mở với phòng khách liền bếp, sử dụng sofa góc nhỏ và kệ tivi treo tường phủ Melamine trắng. Gác lửng bố trí phòng ngủ với giường gấp đa năng và tủ âm tường.</li>
          <li><strong>Điểm nhấn:</strong> Màu sáng (trắng, xám nhạt) kết hợp cửa kính lớn, tạo cảm giác rộng rãi dù diện tích hạn chế.</li>
          <li><strong>Phù hợp:</strong> Người độc thân hoặc cặp đôi trẻ.</li>
        </ul>
        <div className="my-8">
          <Image
            src="/images/nha-pho-30m2.jpg"
            alt="Thiết kế nội thất nhà phố 30m² tối giản hiện đại Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>2.2 Nhà phố 40m² – Linh hoạt và trẻ trung</h3>
        <ul>
          <li><strong>Phong cách:</strong> Hiện đại, Scandinavian.</li>
          <li><strong>Bố cục:</strong> Phòng khách tích hợp bếp chữ I nhỏ gọn, bàn ăn đôi tiện lợi. Gác lửng gồm phòng ngủ với giường thấp và tủ quần áo gỗ công nghiệp vân sồi.</li>
          <li><strong>Điểm nhấn:</strong> Đèn thả trần và cây xanh tạo không gian ấm cúng, kết hợp vách ngăn CNC nhẹ nhàng.</li>
          <li><strong>Phù hợp:</strong> Gia đình nhỏ 1-2 người.</li>
        </ul>
        <div className="my-8">
          <Image
            src="/images/nha-pho-40m2.jpg"
            alt="Mẫu thiết kế nội thất nhà phố 40m² Scandinavian Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>2.3 Nhà phố 60m² – Tiện nghi và ấm cúng</h3>
        <ul>
          <li><strong>Phong cách:</strong> Bắc Âu, hiện đại.</li>
          <li><strong>Bố cục:</strong> Tầng 1 gồm phòng khách với sofa vải xám và bếp chữ L tích hợp bàn ăn 4 ghế. Tầng 2 bố trí 2 phòng ngủ với giường gỗ công nghiệp và tủ kịch trần.</li>
          <li><strong>Điểm nhấn:</strong> Sàn gỗ công nghiệp vân sáng kết hợp thảm họa tiết, tận dụng ánh sáng từ giếng trời.</li>
          <li><strong>Phù hợp:</strong> Gia đình 3-4 người.</li>
        </ul>
        <div className="my-8">
          <Image
            src="/images/nha-pho-60m2.jpg"
            alt="Thiết kế nội thất nhà phố 60m² phong cách Bắc Âu Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>2.4 Nhà phố 80m² – Sang trọng và năng động</h3>
        <ul>
          <li><strong>Phong cách:</strong> Hiện đại, trẻ trung.</li>
          <li><strong>Bố cục:</strong> Tầng 1 thiết kế khách-bếp mở với sofa lớn và đảo bếp phủ Laminate chống ẩm. Tầng 2-3 gồm 2-3 phòng ngủ, tích hợp bàn làm việc nhỏ gọn.</li>
          <li><strong>Điểm nhấn:</strong> Ánh sáng LED và rèm hai lớp tạo sự tinh tế, tường nhấn vân gỗ công nghiệp.</li>
          <li><strong>Phù hợp:</strong> Gia đình trẻ yêu thích tiện nghi.</li>
        </ul>
        <div className="my-8">
          <Image
            src="/images/nha-pho-80m2.jpg"
            alt="Mẫu nội thất nhà phố 80m² hiện đại sang trọng Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>2.5 Nhà phố 100m² – Đa năng và hiện đại</h3>
        <ul>
          <li><strong>Phong cách:</strong> Hiện đại, Scandinavian.</li>
          <li><strong>Bố cục:</strong> Tầng 1 với phòng khách rộng rãi, bếp chữ U và bàn ăn 6 ghế. Tầng 2-3 gồm 3 phòng ngủ, phòng làm việc và góc sinh hoạt chung, sử dụng nội thất gỗ công nghiệp phủ Melamine.</li>
          <li><strong>Điểm nhấn:</strong> Màu pastel kết hợp cây xanh, cửa kính lớn tối ưu ánh sáng tự nhiên.</li>
          <li><strong>Phù hợp:</strong> Gia đình 4-5 người hoặc cần không gian làm việc.</li>
        </ul>
        <div className="my-8">
          <Image
            src="/images/nha-pho-100m2.jpg"
            alt="Thiết kế nội thất nhà phố 100m² hiện đại đa năng Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>2.6 Nhà phố 120m² – Cao cấp và tiện nghi</h3>
        <ul>
          <li><strong>Phong cách:</strong> Hiện đại, Luxury nhẹ.</li>
          <li><strong>Bố cục:</strong> Tầng 1 với khách-bếp mở, bàn ăn 8 ghế và quầy bar nhỏ. Tầng 2-3 gồm 3-4 phòng ngủ với giường bọc nệm, tủ âm tường kịch trần.</li>
          <li><strong>Điểm nhấn:</strong> Tường ốp gỗ công nghiệp vân óc chó, đèn chùm pha lê tạo sự sang trọng.</li>
          <li><strong>Phù hợp:</strong> Gia đình lớn hoặc yêu thích không gian đẳng cấp.</li>
        </ul>
        <div className="my-8">
          <Image
            src="/images/nha-pho-120m2.jpg"
            alt="Mẫu nội thất nhà phố 120m² Luxury Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>

        {/* Phần 3: Các phong cách thiết kế nội thất nhà phố phổ biến */}
        <h2>3. Các phong cách thiết kế nội thất nhà phố phổ biến</h2>
        <p>
          Phong cách thiết kế nội thất đóng vai trò quan trọng trong việc định hình không gian sống, đặc biệt với nhà phố – nơi diện tích thường hạn chế và cần sự hài hòa giữa thẩm mỹ và công năng. Tại Greenla Home, chúng tôi mang đến các phong cách thiết kế nội thất nhà phố đa dạng, sử dụng nội thất gỗ công nghiệp cao cấp (MDF chống ẩm An Cường, phủ Melamine/Laminate) để đáp ứng mọi sở thích và nhu cầu.
        </p>
        <h3>3.1 Phong cách hiện đại</h3>
        <ul>
          <li><strong>Đặc điểm:</strong> Đường nét gọn gàng, bố cục mở, ưu tiên sự tối giản và tiện nghi. Màu trung tính như trắng, xám, be được sử dụng với nội thất gỗ công nghiệp phủ Melamine.</li>
          <li><strong>Ứng dụng:</strong> Phòng khách với sofa vải xám, kệ tivi treo tường; bếp chữ L tích hợp bàn ăn nhỏ.</li>
          <li><strong>Phù hợp:</strong> Gia đình trẻ, yêu thích sự năng động và hiện đại.</li>
        </ul>
        <div className="my-8">
          <Image
            src="/images/phong-cach-hien-dai.jpg"
            alt="Thiết kế nội thất nhà phố phong cách hiện đại Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>3.2 Phong cách Scandinavian (Bắc Âu)</h3>
        <ul>
          <li><strong>Đặc điểm:</strong> Màu sắc nhẹ nhàng (pastel, trắng), kết hợp gỗ công nghiệp vân sồi sáng và vật liệu tự nhiên như vải, mây. Tận dụng ánh sáng từ cửa kính hoặc giếng trời.</li>
          <li><strong>Ứng dụng:</strong> Phòng khách với sofa xám, thảm họa tiết; bếp với bàn ăn gỗ công nghiệp và đèn thả ấm cúng.</li>
          <li><strong>Phù hợp:</strong> Gia đình nhỏ, yêu thích sự ấm áp và gần gũi.</li>
        </ul>
        <div className="my-8">
          <Image
            src="/images/phong-cach-scandinavian.jpg"
            alt="Thiết kế nội thất nhà phố phong cách Scandinavian Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>3.3 Phong cách tối giản (Minimalism)</h3>
        <ul>
          <li><strong>Đặc điểm:</strong> Loại bỏ chi tiết thừa, ưu tiên không gian thoáng đãng và công năng tối ưu. Nội thất gỗ công nghiệp phủ Melamine trắng hoặc xám nhạt, bố cục gọn gàng.</li>
          <li><strong>Ứng dụng:</strong> Phòng ngủ với giường thấp, tủ âm tường; phòng khách chỉ có sofa đơn giản và bàn trà nhỏ.</li>
          <li><strong>Phù hợp:</strong> Người yêu thích sự tinh tế, gọn gàng, đặc biệt cho nhà phố nhỏ.</li>
        </ul>
        <div className="my-8">
          <Image
            src="/images/phong-cach-toi-gian.jpg"
            alt="Thiết kế nội thất nhà phố phong cách tối giản Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>3.4 Phong cách Luxury</h3>
        <ul>
          <li><strong>Đặc điểm:</strong> Sang trọng, tinh tế với nội thất gỗ công nghiệp phủ Laminate bóng, kết hợp kim loại mạ vàng, đá nhân tạo. Màu sắc đậm như đen, nâu, trắng.</li>
          <li><strong>Ứng dụng:</strong> Phòng khách với sofa da, bàn trà kính, đèn chùm; bếp với đảo lớn và đèn LED hiện đại.</li>
          <li><strong>Phù hợp:</strong> Gia đình yêu thích sự xa hoa, nhà phố diện tích lớn (80m²+).</li>
        </ul>
        <div className="my-8">
          <Image
            src="/images/phong-cach-luxury.jpg"
            alt="Thiết kế nội thất nhà phố phong cách Luxury sang trọng Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>3.5 Phong cách tân cổ điển</h3>
        <ul>
          <li><strong>Đặc điểm:</strong> Thanh lịch với phào chỉ nhẹ, nội thất gỗ công nghiệp phủ Laminate bóng. Màu sắc chủ đạo là trắng, kem, vàng nhạt, tạo cảm giác quý phái.</li>
          <li><strong>Ứng dụng:</strong> Phòng khách với sofa bọc nệm, đèn chùm nhỏ; phòng ngủ với giường chạm khắc tinh tế.</li>
          <li><strong>Phù hợp:</strong> Gia đình muốn không gian đẳng cấp nhưng vẫn gần gũi.</li>
        </ul>
        <div className="my-8">
          <Image
            src="/images/phong-cach-tan-co-dien.jpg"
            alt="Thiết kế nội thất nhà phố phong cách tân cổ điển Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>3.6 Phong cách Japandi</h3>
        <ul>
          <li><strong>Đặc điểm:</strong> Giao thoa giữa tối giản Nhật Bản và Bắc Âu, sử dụng gỗ công nghiệp màu nhạt kết hợp mây, tre. Bố cục cân bằng, mang lại cảm giác thư thái.</li>
          <li><strong>Ứng dụng:</strong> Phòng khách với kệ gỗ công nghiệp tối giản, ghế mây; phòng ngủ với giường thấp và đèn lồng giấy.</li>
          <li><strong>Phù hợp:</strong> Người trẻ, yêu thích sự yên bình và sáng tạo.</li>
        </ul>
        <div className="my-8">
          <Image
            src="/images/phong-cach-japandi.jpg"
            alt="Thiết kế nội thất nhà phố phong cách Japandi thư giãn Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>

        {/* Phần 4: Thiết kế nội thất nhà phố theo từng không gian */}
        <h2>4. Thiết kế nội thất nhà phố theo từng không gian</h2>
        <h3>4.1 Phòng khách</h3>
        <p>
          Trung tâm của nhà phố, phòng khách thường có diện tích nhỏ và cần bố trí linh hoạt để tiếp khách, thư giãn. Greenla Home sử dụng sofa góc gọn gàng hoặc sofa vải chữ I kết hợp kệ tivi treo tường phủ Melamine trắng, tiết kiệm không gian. Tủ âm tường hoặc vách ngăn CNC gỗ công nghiệp tạo điểm nhấn và tăng lưu trữ. Màu sắc sáng (trắng, xám) kết hợp ánh sáng tự nhiên từ cửa kính giúp không gian thoáng đãng.
        </p>
        <div className="my-8">
          <Image
            src="/images/phong-khach-nha-pho.jpg"
            alt="Thiết kế nội thất phòng khách nhà phố hiện đại Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>4.2 Phòng bếp</h3>
        <p>
          Thường liền kề phòng khách, phòng bếp nhà phố có diện tích hạn chế, cần tối ưu lưu trữ và tiện nghi nấu nướng. Tủ bếp chữ I hoặc chữ L phủ Laminate chống ẩm, tích hợp bàn ăn gấp gọn hoặc bàn ăn đôi nhỏ. Kệ treo tường và tủ bếp kịch trần tận dụng không gian dọc. Màu sắc trung tính (vân sồi, trắng) kết hợp đèn LED dưới tủ tạo cảm giác hiện đại.
        </p>
        <div className="my-8">
          <Image
            src="/images/phong-bep-nha-pho.jpg"
            alt="Thiết kế nội thất phòng bếp nhà phố tiện nghi Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>4.3 Phòng ngủ</h3>
        <p>
          Không gian nghỉ ngơi cần yên tĩnh, gọn gàng và tối ưu diện tích. Greenla Home thiết kế giường gỗ công nghiệp đa năng (có ngăn kéo hoặc gấp gọn), tủ âm tường kịch trần để lưu trữ quần áo. Bàn làm việc hoặc bàn trang điểm nhỏ tích hợp trong góc phòng. Màu sắc nhẹ nhàng (pastel, xám nhạt) và rèm hai lớp tạo cảm giác thư giãn.
        </p>
        <div className="my-8">
          <Image
            src="/images/phong-ngu-nha-pho.jpg"
            alt="Thiết kế nội thất phòng ngủ nhà phố tối giản Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>4.4 Phòng làm việc hoặc góc đa năng</h3>
        <p>
          Phù hợp nhà phố diện tích trung bình/lớn, cần linh hoạt để làm việc, học tập hoặc giải trí. Greenla Home thiết kế bàn làm việc gỗ công nghiệp tích hợp kệ sách treo tường, ghế gấp tiện lợi. Góc đa năng có thể bố trí ghế thư giãn, kệ trang trí hoặc giá sách nhỏ. Sử dụng màu sắc tươi sáng (trắng, xanh nhạt) kết hợp cây xanh để tăng cảm hứng.
        </p>
        <div className="my-8">
          <Image
            src="/images/goc-lam-viec-nha-pho.jpg"
            alt="Thiết kế nội thất góc làm việc nhà phố đa năng Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>

        {/* Phần 5: Tư vấn phong thủy trong thiết kế nội thất nhà phố */}
        <h2>5. Tư vấn phong thủy trong thiết kế nội thất nhà phố</h2>
        <p>
          Phong thủy đóng vai trò quan trọng trong việc tạo nên không gian sống hài hòa, thu hút tài lộc và sức khỏe, đặc biệt với nhà phố. Greenla Home kết hợp thiết kế nội thất với tư vấn phong thủy chuyên sâu, sử dụng nội thất gỗ công nghiệp chất lượng cao để đảm bảo vừa thẩm mỹ, vừa hợp phong thủy.
        </p>
        <h3>5.1 Phòng khách – Tâm điểm sinh khí</h3>
        <p>
          Phòng khách cần thoáng đãng, đón ánh sáng tự nhiên để thu hút năng lượng tích cực. Greenla Home sử dụng sofa gỗ công nghiệp với màu sắc hợp mệnh gia chủ, bố trí sofa quay ra cửa chính hoặc hướng hợp mệnh, kết hợp cây xanh nhỏ ở góc phòng để tăng sinh khí.
        </p>
        <h3>5.2 Phòng bếp – Giữ lửa hạnh phúc</h3>
        <p>
          Bếp tượng trưng cho tài lộc, nên đặt ở hướng Đông hoặc Tây Nam. Greenla Home thiết kế tủ bếp chữ I hoặc chữ L phủ Laminate chống ẩm, màu sắc ấm áp để tạo cảm giác ấm cúng. Bồn rửa cách bếp ít nhất 60cm, bổ sung đèn LED dưới tủ để tăng ánh sáng, tượng trưng cho sự thịnh vượng.
        </p>
        <h3>5.3 Phòng ngủ – Tái tạo năng lượng</h3>
        <p>
          Giường ngủ không nên đối diện cửa hoặc đặt dưới xà ngang. Greenla Home sử dụng giường gỗ công nghiệp phủ Melamine màu pastel, tủ âm tường kịch trần đặt lệch hướng giường để không cản luồng khí.
        </p>
        <h3>5.4 Cửa chính – Cổng đón tài lộc</h3>
        <p>
          Cửa chính cần thông thoáng, không bị vật cản. Greenla Home thiết kế lối vào gọn gàng, sử dụng cửa gỗ công nghiệp màu hợp mệnh gia chủ, thêm chậu cây nhỏ hoặc đèn lồng để kích hoạt năng lượng tích cực.
        </p>
        <div className="my-8">
          <Image
            src="/images/phong-thuy-nha-pho.jpg"
            alt="Thiết kế nội thất nhà phố hợp phong thủy Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>

        {/* Phần 6: Nội thất gỗ công nghiệp trong thiết kế nhà phố */}
        <h2>6. Nội thất gỗ công nghiệp được sử dụng phổ biến trong thiết kế nội thất nhà phố</h2>
        <p>
          Nội thất gỗ công nghiệp đã trở thành lựa chọn hàng đầu nhờ sự kết hợp hoàn hảo giữa thẩm mỹ, công năng và chi phí hợp lý. Greenla Home sử dụng gỗ công nghiệp cao cấp (MDF chống ẩm An Cường, phủ Melamine/Laminate) để mang đến những không gian sống hiện đại, tiện nghi.
        </p>
        <h3>6.1 Lý do gỗ công nghiệp được ưa chuộng</h3>
        <ul>
          <li><strong>Tiết kiệm chi phí:</strong> Giá thành thấp hơn gỗ tự nhiên nhưng vẫn đảm bảo độ bền và chất lượng.</li>
          <li><strong>Đa dạng mẫu mã:</strong> Hàng trăm màu sắc và vân gỗ (trắng, xám, vân sồi, óc chó).</li>
          <li><strong>Chống ẩm, chống cong vênh:</strong> MDF chống ẩm chịu được khí hậu ẩm ướt, tuổi thọ 10-15 năm.</li>
          <li><strong>Thân thiện môi trường:</strong> Sử dụng nguyên liệu tái chế, góp phần bảo vệ tài nguyên.</li>
        </ul>
        <h3>6.2 Ứng dụng trong nhà phố</h3>
        <ul>
          <li><strong>Phòng khách:</strong> Kệ tivi treo tường, tủ trang trí hoặc vách ngăn CNC gỗ công nghiệp phủ Melamine trắng/xám.</li>
          <li><strong>Phòng bếp:</strong> Tủ bếp chữ I/L phủ Laminate chống ẩm, kết hợp bàn ăn gấp gọn hoặc đảo bếp nhỏ.</li>
          <li><strong>Phòng ngủ:</strong> Giường đa năng có ngăn kéo, tủ âm tường kịch trần phủ Melamine vân sồi.</li>
          <li><strong>Góc đa năng:</strong> Bàn làm việc, kệ sách treo tường gỗ công nghiệp.</li>
        </ul>
        <div className="my-8">
          <Image
            src="/images/go-cong-nghiep-nha-pho.jpg"
            alt="Nội thất gỗ công nghiệp MDF chống ẩm cho nhà phố Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>

        {/* Phần 7: Quy trình thiết kế nội thất nhà phố chuyên nghiệp */}
        <h2>7. Quy trình thiết kế nội thất nhà phố chuyên nghiệp</h2>
        <h3>Bước 1: Tiếp nhận nhu cầu và khảo sát hiện trạng</h3>
        <p>
          Đội ngũ Greenla Home gặp gỡ khách hàng để lắng nghe mong muốn về phong cách, công năng, ngân sách. Chúng tôi tiến hành khảo sát thực tế nhà phố (diện tích, ánh sáng, bố cục).
        </p>
        <h3>Bước 2: Thiết kế bản vẽ 3D chi tiết</h3>
        <p>
          Kiến trúc sư tạo bản vẽ 2D và phối cảnh 3D, thể hiện rõ bố cục, màu sắc, nội thất gỗ công nghiệp. Khách hàng được chỉnh sửa bản vẽ đến khi hài lòng.
        </p>
        <h3>Bước 3: Báo giá minh bạch và ký hợp đồng</h3>
        <p>
          Cung cấp báo giá chi tiết (150.000-400.000 VNĐ/m²). Miễn phí thiết kế nếu thi công trọn gói.
        </p>
        <h3>Bước 4: Sản xuất và thi công nội thất</h3>
        <p>
          Nội thất được sản xuất tại xưởng hiện đại, lắp đặt chính xác theo bản vẽ 3D.
        </p>
        <h3>Bước 5: Nghiệm thu và bàn giao</h3>
        <p>
          Kiểm tra từng hạng mục, bàn giao đúng tiến độ, kèm bảo hành 3-5 năm.
        </p>
        <div className="my-8">
          <Image
            src="/images/quy-trinh-thiet-ke.jpg"
            alt="Quy trình thiết kế nội thất nhà phố chuyên nghiệp Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>

        {/* Phần 8: Báo giá thiết kế nội thất nhà phố */}
        <h2>8. Báo giá thiết kế nội thất nhà phố của Greenla Home</h2>
        <p>
          Greenla Home cung cấp báo giá minh bạch, cạnh tranh, sử dụng nội thất gỗ công nghiệp cao cấp để mang lại chất lượng vượt trội.
        </p>
        <h3>8.1 Báo giá thiết kế nội thất nhà phố</h3>
        <ul>
          <li><strong>Gói cơ bản:</strong> 150.000 – 200.000 VNĐ/m² (bản vẽ 2D, 3D sơ bộ).</li>
          <li><strong>Gói tiêu chuẩn:</strong> 200.000 – 300.000 VNĐ/m² (3D chi tiết, tư vấn phong thủy).</li>
          <li><strong>Gói cao cấp:</strong> 300.000 – 400.000 VNĐ/m² (vật liệu cao cấp, phong thủy chuyên sâu).</li>
          <li><strong>Ưu đãi:</strong> Miễn phí 100% phí thiết kế nếu ký hợp đồng thi công trọn gói.</li>
        </ul>
        <h3>8.2 Yếu tố ảnh hưởng đến báo giá</h3>
        <ul>
          <li><strong>Diện tích nhà phố:</strong> Diện tích lớn có thể giảm chi phí/m².</li>
          <li><strong>Phong cách thiết kế:</strong> Hiện đại/tối giản tiết kiệm hơn so với Luxury/tân cổ điển.</li>
          <li><strong>Yêu cầu đặc biệt:</strong> Tư vấn phong thủy sâu hoặc vật liệu nhập khẩu tăng chi phí 10-20%.</li>
          <li><strong>Số lượng không gian:</strong> Nhiều phòng cần bản vẽ chi tiết hơn.</li>
        </ul>
        <div className="my-8">
          <Image
            src="/images/bao-gia-thiet-ke.jpg"
            alt="Báo giá thiết kế nội thất nhà phố Greenla Home minh bạch"
            width={800}
            height={600}
            className="rounded"
          />
        </div>

        {/* Phần 9: Dự án thiết kế nội thất nhà phố tiêu biểu */}
        <h2>9. Dự án thiết kế nội thất nhà phố tiêu biểu tại Greenla Home</h2>
        <h3>9.1 Nhà phố 40m² – Phong cách tối giản tại Quận 7, TP.HCM</h3>
        <p>
          Phòng khách liền bếp với sofa vải xám, kệ tivi treo tường phủ Melamine trắng, bếp chữ I tích hợp bàn ăn đôi. Gác lửng bố trí phòng ngủ với giường gấp đa năng.
        </p>
        <div className="my-8">
          <Image
            src="/images/du-an-40m2.jpg"
            alt="Dự án nội thất nhà phố 40m² tối giản Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>9.2 Nhà phố 60m² – Phong cách Scandinavian tại Gò Vấp, TP.HCM</h3>
        <p>
          Tầng 1 thiết kế khách-bếp mở với sofa vải xanh pastel, bàn ăn 4 ghế, và tủ bếp chữ L phủ Laminate vân sồi. Tầng 2 gồm 2 phòng ngủ với giường gỗ công nghiệp và tủ kịch trần.
        </p>
        <div className="my-8">
          <Image
            src="/images/du-an-60m2.jpg"
            alt="Dự án nội thất nhà phố 60m² Scandinavian Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>9.3 Nhà phố 100m² – Phong cách hiện đại tại Thủ Đức, TP.HCM</h3>
        <p>
          Tầng 1 bố trí phòng khách với sofa lớn, kệ tivi tích hợp kệ sách, và bếp chữ U có đảo nhỏ. Tầng 2-3 gồm 3 phòng ngủ, phòng làm việc, sử dụng nội thất gỗ công nghiệp phủ Melamine trắng-vân gỗ.
        </p>
        <div className="my-8">
          <Image
            src="/images/du-an-100m2.jpg"
            alt="Dự án nội thất nhà phố 100m² hiện đại Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <h3>9.4 Nhà phố 120m² – Phong cách Luxury tại Quận 2, TP.HCM</h3>
        <p>
          Tầng 1 thiết kế khách-bếp mở với sofa da, bàn ăn 8 ghế, và quầy bar nhỏ phủ Laminate bóng. Tầng 2-3 gồm 3 phòng ngủ với giường bọc nệm, tủ âm tường, và phòng làm việc riêng.
        </p>
        <div className="my-8">
          <Image
            src="/images/du-an-120m2.jpg"
            alt="Dự án nội thất nhà phố 120m² Luxury Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>

        {/* Phần 10: FAQ – Giải đáp thắc mắc */}
        <h2>10. FAQ – Giải đáp thắc mắc về thiết kế nội thất nhà phố</h2>
        <h3>10.1 Có nên thuê đơn vị thiết kế không?</h3>
        <p>
          Có, đặc biệt với nhà phố có diện tích hạn chế. Greenla Home giúp tối ưu không gian, đảm bảo thẩm mỹ và công năng qua bản vẽ 3D chi tiết, tiết kiệm thời gian và chi phí sửa chữa.
        </p>
        <h3>10.2 Chi phí thiết kế là bao nhiêu?</h3>
        <p>
          Chi phí từ 150.000 – 400.000 VNĐ/m², tùy phong cách và diện tích. Miễn phí thiết kế khi thi công trọn gói.
        </p>
        <h3>10.3 Thời gian hoàn thiện một dự án là bao lâu?</h3>
        <p>
          Trung bình từ 1-3 tháng: thiết kế 7-14 ngày, thi công 3-8 tuần, tùy quy mô (nhà 30m² khoảng 3-4 tuần; nhà 120m² khoảng 6-8 tuần).
        </p>
        <h3>10.4 Nhà phố nhỏ có thiết kế đẹp được không?</h3>
        <p>
          Hoàn toàn có thể! Greenla Home đề xuất phong cách hiện đại hoặc tối giản, sử dụng màu sáng và nội thất thông minh như giường gấp, tủ âm tường, bếp chữ I.
        </p>
        <div className="my-8">
          <Image
            src="/images/tu-van-greenla.jpg"
            alt="Tư vấn thiết kế nội thất nhà phố chuyên nghiệp Greenla Home"
            width={800}
            height={600}
            className="rounded"
          />
        </div>

        {/* Phần 11: Kết luận và Kêu gọi Hành động */}
        <h2>11. Liên hệ Greenla Home – Biến ý tưởng thành hiện thực</h2>
        <p>
          Bạn đang tìm kiếm giải pháp để biến ngôi nhà phố của mình thành một tổ ấm hiện đại, tiện nghi và đậm chất riêng? Greenla Home chính là lựa chọn hoàn hảo! Với kinh nghiệm thiết kế và thi công hàng trăm dự án nội thất nhà phố, chúng tôi cam kết mang đến không gian sống hoàn hảo, sử dụng nội thất gỗ công nghiệp cao cấp (MDF chống ẩm An Cường, phủ Melamine/Laminate), kết hợp tư vấn phong thủy và bản vẽ 3D chi tiết. Dù nhà phố nhỏ 30m² hay rộng 120m²+, Greenla Home luôn đảm bảo thẩm mỹ, công năng và chi phí tối ưu.
        </p>
        <p>
          <strong>Nhận tư vấn miễn phí:</strong> Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng lắng nghe và đưa ra những gợi ý thiết kế phù hợp với không gian sống của bạn.
        </p>
        <p>
          <strong>Báo giá minh bạch:</strong> Chúng tôi cung cấp bảng báo giá chi tiết, rõ ràng và cạnh tranh, giúp bạn dễ dàng kiểm soát chi phí.
        </p>
        <p>
          <strong>Đừng chần chừ!</strong> Hãy nhấn nút “Liên hệ ngay” để bắt đầu hành trình cải tạo không gian sống của bạn với Greenla Home!
        </p>
        {/* Nút Liên hệ */}
        <button
          onClick={togglePopup}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-transform transform hover:scale-105 mb-4"
        >
          Liên hệ ngay
        </button>
        <div className="my-8">
          <Image
            src="/images/showroom-greenla.jpg"
            alt="Showroom Greenla Home – Địa chỉ thiết kế nội thất nhà phố uy tín"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
      </section>

      {/* Popup cho Form Liên hệ */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl w-full relative transform transition-transform duration-300 scale-100">
            <button
              onClick={togglePopup}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 font-bold text-lg"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Đăng ký tư vấn miễn phí
            </h3>
            <ContactForm />
          </div>
        </div>
      )}
    </article>
  );
}