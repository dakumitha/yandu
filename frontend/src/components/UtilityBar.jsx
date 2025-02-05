import React from "react";
import Rectangle from "./Rectangle";

const UtilityBar = () => {
  return (
    <>
      <Rectangle heightClass="h-[42px]">
        <div className="w-[214px] relative text-[14px] leading-[14px] font-hk-grotesk text-text text-left inline-block pl-[90px]">
          Welcome to worldwide Megamart!
        </div>
      </Rectangle>
    </>
  );
};

export default UtilityBar;
