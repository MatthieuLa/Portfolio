// BorderedContainer
const BorderedContainer = ({ children, className = "" }) => {
  return (
    <div className={`border-2 border-gray-700 bg-gray-900 p-2 ${className}`}>
      {children}
    </div>
  );
};

const MenuButton = ({ onClick, active, children, className = "" }) => {
  return (
    <button
      className={`p-2 border  border-gray-600 ${
        active ? "bg-red-900 text-white" : "bg-gray-800 hover:bg-gray-700"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// CharacterInfo
const CharacterInfo = ({ username, character }) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm mb-1 px-1">{username}</span>
      <img
        src={`/${character.toLowerCase()}.webp`}
        alt={character}
        className="w-24  h-24object-cover border border-gray-600"
      />
    </div>
  );
};

// // HealthBar.
// const HealthBar = () => {
//   return (
//     <div className="flex items-center h-[148px]">
//       <img src="/health-bar.webp" alt="Barre de vie" className="h3" />
//     </div>
//   );
// };

// Modal
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <BorderedContainer>
        <h3 className="text-xl mb-4 border-b border-gray-600 pb-2">{title}</h3>
        {children}
        <MenuButton className="mt-4 w-full" onClick={onClose}>
          Fermer
        </MenuButton>
      </BorderedContainer>
    </div>
  );
};

export {
  BorderedContainer,
  MenuButton,
  CharacterInfo,
  // HealthBar,
  Modal,
};
