import React from "react";

const Line = ({ left }) => {
  return (
    <div
      style={{ left: `${left}px` }}
      className="absolute top-[11.5px] border-line border-r-[1px] border-solid box-border w-px h-[19px]"
    ></div>
  );
};

export default Line;
