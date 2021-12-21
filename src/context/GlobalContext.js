import React, { createContext } from "react";

const GlobalContext = createContext({
  prevYear: 0,
  nextYear: 0,
  days: [],
  posts: [],
  setDays: (val) => {},
  setPrevYear: (val) => {},
  setNextYear: (val) => {},
  setPosts: (val) => {},
});

export default GlobalContext;
