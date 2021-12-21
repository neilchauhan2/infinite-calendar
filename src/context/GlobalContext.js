import React, { createContext } from "react";

const GlobalContext = createContext({
  prevYear: 0,
  nextYear: 0,
  days: [],
  posts: [],
  isOpen: false,
  setDays: (val) => {},
  setPrevYear: (val) => {},
  setNextYear: (val) => {},
  setPosts: (val) => {},
  setIsOpen: (val) => {},
});

export default GlobalContext;
