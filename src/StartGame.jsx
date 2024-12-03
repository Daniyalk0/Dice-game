import React from "react";

const StartGame = ({ toggle }) => {
  return (
    <div className="flex items-center justify-evenly h-screen flex-col md:flex-row ">
      <div>
        <img src="./src/assets/images/dices.png" alt="logo" className="w-4/5 xs:w-[78vw]" />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-6xl font-semibold xs:text-[15vw]">DICE GAME</h1>
        <button
          onClick={toggle}
          className="bg-zinc-800 text-white w-28 rounded-md py-1 font-semibold ml-1"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default StartGame;
