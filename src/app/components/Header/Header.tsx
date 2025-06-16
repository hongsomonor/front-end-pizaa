import React from "react";
import ThemeToggle from "../Theme/ThemeToggle";
import LocaleSwitcherSelect from "../switchLanguage/LocaleSwitcherSelect";
import { GrLanguage } from "react-icons/gr";

function Header(params: { locale: string }) {
  return (
    <header className=" w-full bg-blue-400 sticky top-0 z-[1000] ">
      <div
        className="w-[1200px] m-auto  h-12 flex items-center justify-between
      max-xl:w-[980px] max-lg:w-full max-lg:px-5
      "
      >
        <div>
          <p className=" dark:text-black">Welcome to The Online Shop</p>
        </div>
        {/* change language and light and dark */}
        <div className=" flex gap-3.5 justify-center items-center">
          <div className=" inline-flex items-center relative ">
            <GrLanguage className=" absolute left-1 bottom-[7px] size-5 dark:text-black" />
            <LocaleSwitcherSelect locale={params.locale} />
          </div>
          <ThemeToggle />
        </div>
        {/* change language and light and dark */}
      </div>
    </header>
  );
}

export default Header;
