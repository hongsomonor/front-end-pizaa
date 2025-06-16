// components/SwiperSlider.js
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "@/app/components/bg/Swiper.css";

import bg1 from "@/app/assets/bg2.jpg";
import bg2 from "@/app/assets/bg4.jpg";
import Image from "next/image";

export default function SwiperSlider() {
  return (
    <div className=" w-full z-0 ">
      <Swiper
        modules={[Autoplay, Navigation]}
        // navigation={true}
        className="mySwiper"
        autoplay={{
          delay: 4000, // ប្តូររាល់ 3 វិនាទី
          disableOnInteraction: false, // បន្តបើអ្នកចុច
        }}
        loop={true}
      >
        <SwiperSlide className="relative w-full h-full">
          <Image src={bg1} alt="bg" className="h-[80vh] w-full" />
          {/* Text Overlay */}
          <div
            id="text"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold text-center z-10"
          >
            Very Delicious and Yummy
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <Image src={bg2} alt="bg" className="h-[80vh] w-full" />
          {/* Text Overlay */}
          <div
            id="text"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center z-10"
          >
            សូមស្វាគមន៍មកកាន់គេហទំព័រ!
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
