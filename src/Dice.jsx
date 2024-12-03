import React from "react";

const images = import.meta.glob("/src/assets/images/dice/*.png", {
  eager: true,
});

const Dice = ({ roleDice, diceClick, resetScore, rule }) => {
  const diceImage = images[`/src/assets/images/dice/dice_${roleDice}.png`];

  return (
    <div className="flex flex-col w-full items-center justify-center gap-4">
      <div>
        <img
          src={diceImage.default} // Access the image's default export
          alt={`Dice ${roleDice}`}
          className="w-40 cursor-pointer xs:w-[50vw]"
          onClick={diceClick}
        />
        <h2 className="text-center font-semibold xs:text-[5vw]">
          Click on Dice to Roll
        </h2>
      </div>
      <div className="flex flex-col">
        <button
          className="w-36 xs:text-[5vw] bg-zinc-800 text-white rounded-md mb-2 py-1"
          onClick={resetScore}
        >
          Reset Score
        </button>
        <button
          className="w-36 xs:text-[5vw] bg-zinc-800 text-white rounded-md py-1"
          onClick={rule}
        >
          Show Rules
        </button>
      </div>
    </div>
  );
};

export default Dice;
