import React from "react";
import InventoryBorderedContainer from "./InventoryBorderedContainer";
import InventoryMenuButton from "./InventoryMenuButton";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-md">
        <InventoryBorderedContainer className="bg-gray-900">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-600 pb-2">
              <h3 className="text-lg md:text-xl">{title}</h3>
              <button onClick={onClose} className="p-2 hover:text-red-500">
                ×
              </button>
            </div>
            <div className="py-2">{children}</div>
            <div className="pt-2 flex justify-end">
              <InventoryMenuButton onClick={onClose} className="px-4">
                Fermer
              </InventoryMenuButton>
            </div>
          </div>
        </InventoryBorderedContainer>
      </div>
    </div>
  );
};

export default Modal;
