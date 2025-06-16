import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import Home from "@/app/assets/home.png";
import { usePathname } from "@/i18n/navigation";
import clsx from "clsx";
import MenuSmall from "./MenuSmall";

const Menu = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const menuItems = [
    { label: t("Menu.home"), href: "/" },
    { label: t("Menu.order"), href: "/order" },
    { label: t("Menu.about"), href: "/about" },
    { label: t("Menu.service"), href: "/service" },
    { label: t("Menu.contact"), href: "/contact" },
  ];
  return (
    <menu className="  w-full">
      <div
        id="Big_Screen"
        className=" w-[1200px] m-auto flex items-center justify-between 
        max-xl:w-[980px] max-lg:w-full max-lg:px-5 max-sm:hidden"
      >
        <Link href={"/"} className=" text-3xl font-bold">
          <Image src={Home} alt="logo" width={150} />
        </Link>
        <ul className="flex gap-6">
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
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <MenuSmall />
    </menu>
  );
};

export default Menu;
