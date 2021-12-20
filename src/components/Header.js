import React, { useContext, useEffect } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
import useDate from "../hooks/useDate";
import WeekHeader from "./WeekHeader";

const Header = () => {
  return (
    <>
      <header className="px-4 py-2 flex items-center">
        <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendar</h1>
        <h2 className="ml-4 text-xl text-gray-500 font-bold">
          {/* {dayjs(new Date(2020, prevMonth)).format("MMMM YYYY")} */}
        </h2>
      </header>
      <WeekHeader />
    </>
  );
};

export default Header;
