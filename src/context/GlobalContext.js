import React, { createContext } from "react";

const GlobalContext = createContext({
  month: 0,
  setMonth: (val) => {},
});

export default GlobalContext;
