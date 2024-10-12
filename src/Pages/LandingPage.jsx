import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [character, setCharacter] = useState("Leon");
  const navigate = useNavigate();

  const handleStart = () => {
    if (username.trim() !== "") {
      //Usernames and characters are passed as state to the next page
      navigate("/Portfolio", { state: { username, character } });
    }
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="w-96 bg-gray-900 border-2 border-gray-700 p-8 text-gray-300 font-mono">
        <h1 className="text-2xl mb-6 text-red-600 text-center">
          Resident Folio
        </h1>

        <div className="mb-6">
          <label className="block mb-2">Nom d'utilisateur:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 p-2 text-white"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">Choisissez votre personnage:</label>
          <div className="flex justify-between">
            <label className="flex items-center">
              <input
                type="radio"
                value="Leon"
                checked={character === "Leon"}
                onChange={() => setCharacter("Leon")}
                className="mr-2"
              />
              Leon
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Claire"
                checked={character === "Claire"}
                onChange={() => setCharacter("Claire")}
                className="mr-2"
              />
              Claire
            </label>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src={`/${character.toLowerCase()}.webp`}
            alt={character}
            className="w-32 h-32 object-cover"
          />
        </div>

        <button
          onClick={handleStart}
          className="w-full bg-red-700 hover:bg-red-600 text-white py-2 px-4 focus:outline-none"
        >
          COMMENCER
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
