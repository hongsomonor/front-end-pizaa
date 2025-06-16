"use client";
import { useRouter, usePathname } from "@/i18n/navigation";
import { ChangeEvent } from "react";

export default function LocaleSwitcherSelect({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  };
  return (
    <select
      value={locale}
      onChange={handleChange}
      className=" cursor-pointer rounded border pr-0 pl-6 pb-0.5 text-[15px] -mt-0.5 dark:text-black"
    >
      <option value="en">English</option>
      <option value="km">ភាសាខ្មែរ</option>
    </select>
  );
}
