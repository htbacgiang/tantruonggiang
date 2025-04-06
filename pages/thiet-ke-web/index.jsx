import Head from 'next/head';
import DeviceShowcase from '../../components/profiles/DeviceShowcase';
import DefaultLayout from '../../components/layout/DefaultLayout';
import DemoProduct from '../../components/profiles/DemoProduct';
import WorkProcess from '../../components/profiles/WorkProcess';
import NQWebHero from '../../components/profiles/NQWebHero';
import Image from 'next/image';
import CoreValues from '../../components/about/CoreValues';
export default function Home() {
    return (
        <DefaultLayout>
            <div className="min-h-screen">
                <h1 className="hidden">
                    Thiết kế website chuyên nghiệp, giải pháp phát triển thương hiệu số
                </h1>
                <Head>

                    <title>Thiết kế website chuyên nghiệp, giải pháp phát triển thương hiệu số</title>
                    <meta name="description" 
                    content="Trường NQ Web cung cấp dịch vụ thiết kế website theo yêu cầu, chuẩn SEO, giao diện đẹp, dễ quản trị. Giúp doanh nghiệp tăng nhận diện, tối ưu chuyển đổi và phát triển bền vững" />
                </Head>
                <DeviceShowcase />
                {/* Services Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <DemoProduct />
                        <CoreValues />
                        <WorkProcess />
                        <NQWebHero />
                    </div>
                </section>
                {/* Call to Action Section */}
                <section className="py-10 bg-blue-600 text-white text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-xl  md:text-3xl font-bold mb-4">
                            Sẵn sàng phát triển thương hiệu của bạn?
                        </h2>
                        <p className="text-lg mb-8">
                            Liên hệ với Trường NQ Web ngay hôm nay để nhận tư vấn và giải pháp tối ưu nhất!
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                            Bắt đầu ngay
                        </button>
                    </div>
                </section>

                {/* Footer */}

            </div>
        </DefaultLayout>
    );
}