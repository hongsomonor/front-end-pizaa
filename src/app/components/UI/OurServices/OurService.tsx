import BoxCard from "./BoxCard";
import icon1 from "@/app/assets/icon/ourService/1.png";
import icon2 from "@/app/assets/icon/ourService/2.png";
import icon3 from "@/app/assets/icon/ourService/3.png";
import icon4 from "@/app/assets/icon/ourService/4.png";
import icon5 from "@/app/assets/icon/ourService/5.png";
import icon6 from "@/app/assets/icon/ourService/6.png";
import { useTranslations } from "next-intl";

const OurService = () => {
  const t = useTranslations("Home.OurService");
  return (
    <div className=" w-full ">
      <h2 className=" text-black dark:text-gray-100 text-center text-2xl">
        Our Services
      </h2>
      <div className=" w-[1200px] m-auto py-4 px-5 grid grid-cols-2 gap-4 max-[1200px]:w-[900px] max-[900px]:px-5 max-[900px]:w-full max-[600px]:grid-cols-1 max-[600px]:px-3">
        <BoxCard
          img={icon1}
          title={t("Delivery.title")}
          details={t("Delivery.details")}
        />
        <BoxCard
          img={icon2}
          title={t("Shop.title")}
          details={t("Shop.details")}
        />
        <BoxCard
          img={icon3}
          title={t("Payment.title")}
          details={t("Payment.details")}
        />
        <BoxCard
          img={icon4}
          title={t("Local.title")}
          details={t("Local.details")}
        />
        <BoxCard
          img={icon5}
          title={t("Travel.title")}
          details={t("Travel.details")}
        />
        <BoxCard
          img={icon6}
          title={t("Entertainment.title")}
          details={t("Entertainment.details")}
        />
      </div>
    </div>
  );
};

export default OurService;
