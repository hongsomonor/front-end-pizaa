import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Home from "@/app/assets/home.png";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

function MenuSmall() {
  const t = useTranslations();
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  // Lock scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showMenu]);
  const menuItems = [
    { label: t("Menu.home"), href: "/" },
    { label: t("Menu.order"), href: "/order" },
    { label: t("Menu.about"), href: "/about" },
    { label: t("Menu.service"), href: "/service" },
    { label: t("Menu.contact"), href: "/contact" },
  ];
  return (
    <menu className=" w-full sm:hidden max-sm:flex mx-4 max-sm:w-auto">
      <div
        id="small_screen"
        className="w-[1200px] m-auto flex justify-between items-center
          "
      >
        <Link href="/" className="text-3xl font-bold">
          <Image src={Home} alt="logo" width={150} />
        </Link>

        <AiOutlineMenuFold
          id="btn-show"
          className="text-3xl relative inset-0 cursor-pointer"
          onClick={() => setShowMenu(true)}
        />

        {/* Overlay */}
        <div
          id="bg-overlay"
          className={` z-50 h-full w-full flex justify-center items-center fixed inset-0 bg-[rgba(29,29,29,0.5)] transition-opacity duration-300 ${
            showMenu ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setShowMenu(false)}
        >
          {/* Slide Menu */}
          <div
            id="slide-menu"
            className={`z-[10000] absolute top-10 right-0 w-[300px] h-full bg-gray-400 p-5 transform transition-transform duration-300 ${
              showMenu ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <IoMdClose
              id="btn-close"
              className={`cursor-pointer text-3xl absolute -left-11 top-8 hover:rotate-180 text-white transition-all duration-500`}
              onClick={() => setShowMenu(false)}
            />
            <ul className="flex flex-col mt-10 gap-6">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 hover:before:w-full hover:before:h-1 hover:before:bg-blue-400 before:transition-all before:duration-700 hover:text-red-500 ",
                        {
                          "text-red-500 before:w-full before:h-1 before:bg-blue-400 text-[20px] bottom-1":
                            isActive,
                        }
                      )}
                      onClick={() => setShowMenu(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </menu>
  );
}

export default MenuSmall;
