import ShowData from "@/app/components/Order/ShowData";
import React from "react";
import GetBox from "@/app/components/Order/FindProduct/GetBox";

function OrderPage() {
  return (
    <div className=" w-full pt-[6rem] ">
      <div className=" w-[1200px] m-auto flex flex-col max-xl:w-[980px] max-lg:w-full max-lg:px-5">
        <div id={"top"} className={"mb-[3rem] max-[480px]:mb-[1.5rem]"}>
          <h1 className={"text-4xl font-bold"}>Order</h1>
        </div>
        <h2 className=" text-3xl mb-8 text-center">Category</h2>
        <div className="mb-[3rem] flex justify-center max-xl:w-[980px] max-lg:w-full max-lg:px-5">
          <GetBox />
        </div>
        <h2 className=" text-3xl mb-8 text-center">Products</h2>
        <ShowData />
      </div>
    </div>
  );
}

export default OrderPage;
