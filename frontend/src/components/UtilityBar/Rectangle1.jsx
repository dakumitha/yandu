import React from "react";
import WelcomMsg from "./WelcomMsg";
import Location from "./Location";
import OrderTracking from "./OrderTracking";
import Line from "./Line";
import AllOffers from "./AllOffers";

const Rectangle1 = () => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-backgorund-1 w-[1440px] h-[42px]">
      <WelcomMsg />
      <Location />
      <Line left={1061.5}></Line>
      <OrderTracking />
      <Line left={1221.5}></Line>
      <AllOffers />
    </div>
  );
};

export default Rectangle1;
