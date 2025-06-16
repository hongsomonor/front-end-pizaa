import Image from "next/image";

interface Props {
  img: any;
  title: string;
  details: string;
}

const BoxCard = ({ img, title, details }: Props) => {
  return (
    <article className="group cursor-pointer w-full p-2.5 flex justify-start items-center">
      <div className=" w-[60px]">
        <Image
          src={img}
          alt="icon"
          width={60}
          height={60}
          className=" scale-110 group-hover:scale-100 transition-transform"
        />
      </div>
      <div className=" w-[100%] ml-3">
        <h2 className=" mb-2 font-bold text-[20px] max-[900px]:text-[15px] ">
          {title}
        </h2>
        <p className=" text-[15px] text-gray-500 max-[900px]:text-[10px] ">
          {details}
        </p>
      </div>
    </article>
  );
};

export default BoxCard;
