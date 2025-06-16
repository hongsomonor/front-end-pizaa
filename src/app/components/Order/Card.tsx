import Image from "next/image";
import { LuHeart } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

interface Props {
  id: string;
  price: string;
  img: string; // Change 'any' to 'string' as it will be a URL
  title: string;
}

const Card = ({ id, price, img, title }: Props) => {
  return (
    <article className=" group/card overflow-hidden ">
      <div className="border-5 border-red-700 rounded-[7px_7px_0_0]">
        <div
          id="img"
          className=" relative bg-amber-50 w-full flex flex-col justify-center items-center"
        >
          <span className=" absolute right-2 top-1 text-[18px]">${price}</span>
          <Image src={img} alt="photo" width={100} height={100} objectFit="contain" /> {/* Added height and objectFit for better image handling */}
          <div
            id="float"
            className=" absolute right-[-40px] group-hover/card:right-[15px] group-hover/card:transition-all group-hover/card:duration-300 transition-all duration-300 bg-red-700 px-2 py-3 rounded-[7px] flex flex-col gap-4  "
          >
            <Link href={"/"} className="group/save">
              <LuHeart className=" relative text-[20px] text-white" />
              <span
                className="absolute -left-[70px] top-[5px]
                       hidden group-hover/save:block group-hover/save:transform-3d
                      transition-all duration-800
                      bg-red-600 text-white text-sm px-3 py-1
                      rounded-md whitespace-nowrap z-10"
              >
                Save
              </span>
            </Link>
            <Link href={`/order/${id}`} className="group/view">
              <FaEye className=" relative inset-0 text-[20px] text-white" />
              <span
                className="absolute -left-[123px] bottom-[5px]
                      hidden group-hover/view:block
                      transition-all duration-800
                      bg-red-600 text-white text-sm px-3 py-1
                      rounded-md whitespace-nowrap z-10"
              >
                View details
              </span>
            </Link>
          </div>
        </div>
        <div
          id="info"
          className=" bg-red-700 w-full h-15 flex justify-center items-center"
        >
          <h3 id="title" className=" text-3xl text-white font-bold">
            {title}
          </h3>
        </div>
      </div>
      {/* click button below add product to Cart */}
      <div
        id="add-cart"
        className=" bg-black w-full h-11 flex justify-center items-center hover:bg-white hover:border-2 hover:border-red-700"
      >
        <button className=" hover:text-black hover:transition-all hover:duration-500 transition-all duration-500 h-full w-full cursor-pointer text-amber-50 inline-flex justify-center items-center gap-2 font-bold text-[18px]">
          <AiOutlineShoppingCart className=" text-[26px] pb-1" />
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default Card;