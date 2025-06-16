"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  // ============ Scroll hide and show Navbar ============
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setTimeout(() => {
          setShow(false); // scroll down → hide navbar
        }, 400);
      } else {
        setShow(true); // scroll up → show navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  // ============ The end ============
  const t = useTranslations();
  return (
    <nav
      id="navbar"
      className={`${
        show ? "top-10" : "-top-20"
      } h-[80px] w-full fixed transition-all duration-500 ease-in-out bg-amber-300/70 text-black dark:text-white dark:bg-[rgba(0,0,0,0.8)] flex justify-between items-center z-10`}
    >
      <Menu />
    </nav>
  );
};

export default Navbar;
