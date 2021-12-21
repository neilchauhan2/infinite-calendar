import React, { useContext } from "react";
import Day from "./Day";
import GlobalContext from "../context/GlobalContext";

export default function Month() {
  const { days } = useContext(GlobalContext);

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {days.map((day, i) => (
        <Day day={day} key={i} rowIdx={i} />
      ))}
    </div>
  );
}
