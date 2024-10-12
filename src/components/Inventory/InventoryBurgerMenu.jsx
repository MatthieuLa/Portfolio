import React from "react";

// Responsive burger menu button
const BurgerMenu = ({ isOpen, onToggle }) => {
  return (
    <button
      className="p-2 hover:bg-gray-800 rounded transition-colors md:hidden"
      onClick={onToggle}
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
    >
      <div className="space-y-1.5">
        <span
          className={`
              block w-6 h-0.5 bg-gray-300 transition-transform transform
              ${isOpen ? "rotate-45 translate-y-2" : ""}
            `}
        />
        <span
          className={`
              block w-6 h-0.5 bg-gray-300 transition-opacity
              ${isOpen ? "opacity-0" : ""}
            `}
        />
        <span
          className={`
              block w-6 h-0.5 bg-gray-300 transition-transform transform
              ${isOpen ? "-rotate-45 -translate-y-2" : ""}
            `}
        />
      </div>
    </button>
  );
};

export default BurgerMenu;
