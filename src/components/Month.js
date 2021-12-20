import React, { useContext, useRef, useCallback, useEffect } from "react";
import Day from "./Day";
import GlobalContext from "../context/GlobalContext";
import useDate from "../hooks/useDate";

export default function Month() {
  const { days } = useContext(GlobalContext);
  const { loadPreviousYear, loadNextYear } = useDate();

  // useEffect(() => {
  //   loadPreviousYear();
  //   loadNextYear();
  // }, []);

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {days.map((day, i) => (
        <Day day={day} key={i} rowIdx={i} />
      ))}
    </div>
  );
}
