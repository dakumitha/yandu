import React from "react";

const UtilityBox = ({ top = 12, left = 0, className = "", children }) => {
  return (
    <div
      style={{ top: `${top}px`, left: `${left}px` }}
      className={`absolute flex flex-row items-start justify-start gap-1.5 text-right text-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default UtilityBox;
