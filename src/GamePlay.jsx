import React, { useEffect, useState } from "react";
import Score from "./Score";
import NumberSelector from "./NumberSelector";
import Dice from "./Dice";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [roleDice, setRoleDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState();
  const [ruless, setrules] = useState(false);

  const rule = () => {
    setrules((prev) => !prev);
  };

  useEffect(() => {
    if (ruless) {
      window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the bottom of the page
        behavior: 'smooth', // Smooth scrolling
      });
    } else {
      window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: 'smooth', // Smooth scrolling
      });
    }

    
  }, [ruless]); // Re-run effect when `scrollToBottom` changes

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const audio = new Audio('/src/assets/rollDice.mp3');

  const diceClick = () => {
    if (!selectedNumber) {
      setError("First Select a Number!");
      return;
    }
    const random = getRandomNumber(1, 6); // Roll the dice
    setRoleDice(random);
audio.play()
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
