import React from "react";

const WeekHeader = () => {
  return (
    <div className="flex-1 grid grid-cols-7 ">
      <div className="border border-gray-200 flex flex-col">
        <p className="text-sm text-center font-bold">Sun</p>
      </div>
      <div className="border border-gray-200 flex flex-col">
        <p className="text-sm  text-center font-bold">Mon</p>
      </div>
      <div className="border border-gray-200 flex flex-col">
        <p className="text-sm  text-center font-bold">Tue</p>
      </div>
      <div className="border border-gray-200 flex flex-col">
        <p className="text-sm text-center font-bold">Wed</p>
      </div>
      <div className="border border-gray-200 flex flex-col">
        <p className="text-sm  text-center font-bold">Thu</p>
      </div>
      <div className="border border-gray-200 flex flex-col">
        <p className="text-sm text-center font-bold">Fri</p>
      </div>
      <div className="border border-gray-200 flex flex-col">
        <p className="text-sm text-center font-bold">Sat</p>
      </div>
    </div>
  );
};

export default WeekHeader;
