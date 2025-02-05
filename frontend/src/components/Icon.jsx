import React from "react";

const Icon = ({
  src,
  alt = "icon",
  width = 18,
  height = 18,
  className = "",
}) => {
  return (
    <img
      className={`w-[${width}px] relative h-[${height}px] overflow-hidden shrink-0 ${className}`}
      src={src}
      alt={alt}
    />
  );
};

export default Icon;
