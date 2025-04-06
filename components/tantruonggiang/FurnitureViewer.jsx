import React, { useState } from "react";

const FurnitureViewer = () => {
  // Danh sách các link video 360 cho từng tab (giả định)
  const videoLinks = {
    "PHÒNG KHÁCH": "https://www.jegaai.com/720/S5DDIGDJCI", // Giả định
    "PHÒNG ĂN": "https://www.jegaai.com/720/S5DDIGDJCI", // Link thật bạn cung cấp
    "NHÀ BẾP": "https://www.jegaai.com/720/ROOM3", // Giả định
    "VĂN PHÒNG": "https://www.jegaai.com/720/ROOM4", // Giả định
    "PHÒNG NGỦ": "https://www.jegaai.com/720/ROOM5", // Giả định
    "SẢNH CHỜ": "https://www.jegaai.com/720/ROOM6", // Giả định
  };

  // Trạng thái để theo dõi tab đang được chọn
  const [selectedTab, setSelectedTab] = useState("PHÒNG KHÁCH");

  // Hàm xử lý khi nhấn vào tab
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">THIẾT KẾ 3D HIỆN ĐẠI</h2>
        <p className="text-orange-500 text-sm">PHONG PHÚ ĐA DẠNG</p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-4">
        {/* Video Section */}
        <div className="w-full md:w-2/3 bg-gray-800 rounded-lg overflow-hidden">
          <iframe
            src={videoLinks[selectedTab]} // Link video thay đổi theo tab được chọn
            className="w-full h-96 md:h-[500px]"
            frameBorder="0"
            allowFullScreen
            title="Video 360"
          ></iframe>
        </div>

        {/* Menu Section - Grid 2x3 */}
        <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
             {/* PHÒNG KHÁCH */}
             <button
            onClick={() => handleTabClick("PHÒNG KHÁCH")}
            className={`${
              selectedTab === "PHÒNG KHÁCH" ? "bg-orange-500" : "bg-gray-800"
            } text-white py-3 rounded-lg flex flex-col items-center justify-center gap-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-sm">PHÒNG KHÁCH</span>
          </button>
          {/* PHÒNG ĂN */}
          <button
            onClick={() => handleTabClick("PHÒNG ĂN")}
            className={`${
              selectedTab === "PHÒNG ĂN" ? "bg-orange-500" : "bg-gray-800"
            } text-white py-3 rounded-lg flex flex-col items-center justify-center gap-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7h18M3 12h18m-7 5h7"
              />
            </svg>
            <span className="text-sm">PHÒNG ĂN</span>
          </button>

     

          {/* NHÀ BẾP */}
          <button
            onClick={() => handleTabClick("NHÀ BẾP")}
            className={`${
              selectedTab === "NHÀ BẾP" ? "bg-orange-500" : "bg-gray-800"
            } text-white py-3 rounded-lg flex flex-col items-center justify-center gap-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            <span className="text-sm">NHÀ BẾP</span>
          </button>

          {/* VĂN PHÒNG */}
          <button
            onClick={() => handleTabClick("VĂN PHÒNG")}
            className={`${
              selectedTab === "VĂN PHÒNG" ? "bg-orange-500" : "bg-gray-800"
            } text-white py-3 rounded-lg flex flex-col items-center justify-center gap-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span className="text-sm">VĂN PHÒNG</span>
          </button>

          {/* PHÒNG NGỦ */}
          <button
            onClick={() => handleTabClick("PHÒNG NGỦ")}
            className={`${
              selectedTab === "PHÒNG NGỦ" ? "bg-orange-500" : "bg-gray-800"
            } text-white py-3 rounded-lg flex flex-col items-center justify-center gap-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
            <span className="text-sm">PHÒNG NGỦ</span>
          </button>

          {/* SẢNH CHỜ */}
          <button
            onClick={() => handleTabClick("SẢNH CHỜ")}
            className={`${
              selectedTab === "SẢNH CHỜ" ? "bg-orange-500" : "bg-gray-800"
            } text-white py-3 rounded-lg flex flex-col items-center justify-center gap-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m-12 1h6m-6 4h6m6-8v8m-6-4h6"
              />
            </svg>
            <span className="text-sm">SẢNH CHỜ</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FurnitureViewer;