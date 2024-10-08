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

const CharacterInfo = ({ username, character }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm mb-1 px-1">{username}</span>
      <div className="w-20 h-20 md:w-24 md:h-24 border border-gray-600">
        <img
          src={`/${character.toLowerCase()}.webp`}
          alt={character}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-md">
        <BorderedContainer className="bg-gray-900">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-600 pb-2">
              <h3 className="text-lg md:text-xl">{title}</h3>
              <button onClick={onClose} className="p-2 hover:text-red-500">
                ×
              </button>
            </div>
            <div className="py-2">{children}</div>
            <div className="pt-2 flex justify-end">
              <MenuButton onClick={onClose} className="px-4">
                Fermer
              </MenuButton>
            </div>
          </div>
        </BorderedContainer>
      </div>
    </div>
  );
};

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

export { BorderedContainer, MenuButton, CharacterInfo, Modal, BurgerMenu };
