import Image from "next/image";
import React from "react";

interface Props {
  img: any;
  title: string;
  subtitle: string;
}

const HomeCard = ({ img, title, subtitle }: Props) => {
  return (
    <article
      id="h-card"
      className=" w-[300px] max-[820px]:w-full py-15 bg-red-700 flex flex-col justify-center items-center bg-linear-to-b from-red-700 to-yellow-600"
    >
      <Image
        src={img}
        alt="icon"
        width={70}
        // Change color img red to white
        // CSS img { filter: grayscale(100%) brightness(0) invert(1); }
        className="filter grayscale brightness-0 invert"
      />
      <h2 className=" whitespace-nowrap text-white font-bold pt-5 pb-1.5 text-2xl">
        {title}
      </h2>
      <span className=" text-gray-200 font-mono text-[18px] ">{subtitle}</span>
    </article>
  );
};

export default HomeCard;
