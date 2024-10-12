import React from "react";

const MenuButton = ({
  onClick,
  active,
  children,
  className = "",
  full = false,
}) => {
  return (
    <button
      className={`
          p-2 
          border 
          border-gray-600 
          transition-colors
          ${active ? "bg-red-900 text-white" : "bg-gray-800 hover:bg-gray-700"}
          ${full ? "w-full" : ""}
          ${className}
        `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MenuButton;
