// import React, { useState } from "react";

const Dice = ({ roleDice, diceClick, resetScore, rule }) => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-4">
      <div className="">
        <img
          src={`./public/images/dice/dice_${roleDice}.png`}
          alt=""
          className="w-40 cursor-pointer xs:w-[36vw]"
          onClick={diceClick}
        />
        <h2 className="text-center font-semibold xs:text-[4vw]">Click on Dice to Roll</h2>
      </div>
      <div className="flex flex-col">
        <button
          className="w-36 xs:text-[3vw] bg-zinc-800 text-white rounded-md mb-2 py-1"
          onClick={resetScore}
        >
          reset Score
        </button>
        <button
          className="w-36 xs:text-[3vw] bg-zinc-800 text-white rounded-md py-1"
          onClick={rule}
        >
          Show Rules
        </button>
      </div>
    </div>
  );
};

export default Dice;
