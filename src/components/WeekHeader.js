import React from "react";

const WeekHeader = () => {
  return (
    <div className="flex-1 grid grid-cols-7 ">
      <div className="border border-gray-200 flex flex-col bg-stone-100">
        <p className="text-sm text-center font-bold">S</p>
      </div>
      <div className="border border-gray-200 flex flex-col">
        <p className="text-sm  text-center font-bold">M</p>
      </div>
      <div className="border border-gray-200 flex flex-col">
        <p className="text-sm  text-center font-bold">T</p>
      </div>
      <div className="border border-gray-200 flex flex-col">
        <p className="text-sm text-center font-bold">W</p>
      </div>
      <div className="border border-gray-200 flex flex-col">
        <p className="text-sm  text-center font-bold">T</p>
      </div>
      <div className="border border-gray-200 flex flex-col">
        <p className="text-sm text-center font-bold">F</p>
      </div>
      <div className="border border-gray-200 flex flex-col">
        <p className="text-sm text-center font-bold">S</p>
      </div>
    </div>
  );
};

export default WeekHeader;
