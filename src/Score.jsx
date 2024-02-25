import React, { useState } from "react";

const Score = ({score}) => {
  return (
    <div className="flex flex-col items-center justify-center w-32">
      <h1 className="text-6xl font-semibold">{score}</h1>
      <h3 className="font-semibold">Total Score</h3>
    </div>
  );
};

export default Score;
