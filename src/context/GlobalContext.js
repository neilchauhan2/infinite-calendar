import React, { createContext } from "react";

const GlobalContext = createContext({
  prevYear: 0,
  nextYear: 0,
  days: [],
  setDays: (val) => {},
  setPrevYear: (val) => {},
  setNextYear: (val) => {},
});

export default GlobalContext;
