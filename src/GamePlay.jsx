import React, { useEffect, useState } from "react";
import Score from "./Score";
import NumberSelector from "./NumberSelector";
import Dice from "./Dice";
import Rules from "./Rules";
import rollDiceSound from './assets/rollDice.mp3';

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [roleDice, setRoleDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState();
  const [ruless, setrules] = useState(false);

  const rule = () => {
    setrules((prev) => !prev);
  };


  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const audio = new Audio(rollDiceSound);

  const diceClick = () => {
    if (!selectedNumber) {
      setError("First Select a Number!");
      return;
    }
    const random = getRandomNumber(1, 6); // Roll the dice
    setRoleDice(random);
    audio.play().catch((error) => console.error('Playback failed:', error));
    console.log(random); // Log the result
    setSelectedNumber("");
    if (selectedNumber === random) {
      setScore((prev) => prev + selectedNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  };
  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="flex flex-col min-h-screen w-full gap-16 xs:gap-7">
      <div className="flex items-center justify-around p-4 xs:flex-col xs:p-2">
        <Score score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <Dice
        roleDice={roleDice}
        diceClick={diceClick}
        resetScore={resetScore}
        rule={rule}
      />
      {ruless ? <Rules /> : ""}
    </div>
  );
};

export default GamePlay;
