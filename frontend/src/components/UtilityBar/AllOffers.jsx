import React from "react";
import UtilityBox from "./UtilityBox";
import Icon from "../Icon";
import Offer from "../../assets/Discount.svg";

const AllOffers = () => {
  return (
    <>
      <UtilityBox left={1238}>
        <Icon src={Offer} alt={"offer icon"}></Icon>
        <div className="relative leading-[18px]">All Offers</div>
      </UtilityBox>
    </>
  );
};

export default AllOffers;
