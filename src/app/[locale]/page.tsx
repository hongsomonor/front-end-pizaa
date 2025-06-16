"use client";

import { useTranslations } from "next-intl";
import SwiperSlider from "../components/bg/SwiperSlider";
import OurService from "../components/UI/OurServices/OurService";
import GetCard from "../components/UI/GetCard";
import "./style.css"

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <div className=" w-full bg-gray-200 dark:bg-[#000033]">
        <SwiperSlider />
        <GetCard />
        <OurService />
      </div>
    </>
  );
}
