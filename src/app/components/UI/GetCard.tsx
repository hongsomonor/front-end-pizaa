import BusTime from "../../assets/icon/bussiness-time.png";
import CusService from "../../assets/icon/customer-service.png";
import Secure from "../../assets/icon/secure-payment.png";

import React from "react";
import HomeCard from "./HomeCard";

const GetCard = () => {
  return (
    <div id="working" className="w-full py-5 ">
      <div className="mx-auto px-4 ">
        <div className="w-full gap-8 flex justify-center items-center flex-wrap">
          <HomeCard img={BusTime} title="Working Hours" subtitle="8AM - 6PM" />
          <HomeCard img={CusService} title="Support Center" subtitle="24/7" />
          <HomeCard
            img={Secure}
            title="Payasment Services"
            subtitle="100% SECURE"
          />
        </div>
      </div>
    </div>
  );
};

export default GetCard;
