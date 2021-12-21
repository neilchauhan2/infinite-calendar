import React from "react";

const Legend = ({ color, text }) => {
  return (
    <div className="legend mx-1">
      <div
        className={`rounded-full h-6 w-6 my-2 flex items-center justify-center ${color}`}
      >
        <p className="text-xs text-stone-500">{text}</p>
      </div>
    </div>
  );
};

export default Legend;
