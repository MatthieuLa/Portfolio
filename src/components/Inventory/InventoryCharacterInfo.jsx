import React from "react";

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

export default CharacterInfo;
