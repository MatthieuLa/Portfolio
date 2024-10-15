import React from "react";

const BurgerMenu = ({ isOpen, onToggle }) => {
  return (
    <button
      className="relative group"
      onClick={onToggle}
      aria-label="Toggle menu"
    >
      <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
          <div
            className={`bg-[rgb(31,41,55)] h-[2px] w-7 transform transition-all duration-300 origin-left ${
              isOpen ? "rotate-[42deg] translate-y-6" : ""
            }`}
          />
          <div
            className={`bg-[rgb(31,41,55)] h-[2px] w-7 rounded transform transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`bg-[rgb(31,41,55)] h-[2px] w-7 transform transition-all duration-300 origin-left ${
              isOpen ? "-rotate-[42deg] -translate-y-6" : ""
            }`}
          />
        </div>
      </div>
    </button>
  );
};

export default BurgerMenu;
