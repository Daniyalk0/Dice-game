import React from "react";

const Rules = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center absolute bottom-10 xs:relative xs:items-start">
      <div className="w-1/3 xs:w-[80vw] xs:mt-8 xs:mx-7">
        <h3 className="font-bold text-1xl xs:text-[3.5vw]">How to play dice game,</h3>
        <p className="text-sm font-semibold xs:text-[2.9vw] xs:leading-4 ">
          Select any number <br /> Click on dice image after click on dice if
          selected number is equal to dice number <br /> you will get same point
          as dice <br /> if you get wrong guess then 2 point will be dedcuted.
        </p>
      </div>
    </div>
  );
};

export default Rules;
