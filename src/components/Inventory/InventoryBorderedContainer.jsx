import React from "react";

const BorderedContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`border border-gray-700 bg-gray-900/50 p-1 md:p-2 transition-all ${className}`}
    >
      {children}
    </div>
  );
};

export default BorderedContainer;
