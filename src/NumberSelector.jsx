import React, { useState } from "react";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const arr = [1, 2, 3, 4, 5, 6];
  const isSelectedd = (val) => {
    setSelectedNumber(val);
    setError("");
  };
  return (
    <div className="w-78 h-24 flex flex-col justify-center">
      <h2 className="text-center font-semibold text-red-600 text-sm">
        {error}
      </h2>
      <div className="flex gap-2">
        {arr.map((value, index) => {
          return (
            <div
              className={`font-semibold text-1xl border-2 border-black w-12  h-12 flex items-center justify-center ${
                selectedNumber == value ? "bg-zinc-900 text-white" : ""
              } cursor-pointer`}
              onClick={() => isSelectedd(value)}
              key={index}
            >
              {value}
            </div>
          );
        })}
      </div>
      <h1 className="text-right font-semibold">Select Any Number</h1>
    </div>
  );
};
export default NumberSelector;
