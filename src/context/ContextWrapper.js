import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const ContextWrapper = (props) => {
  const [month, setMonth] = useState(11);
  return (
    <GlobalContext.Provider value={{ month, setMonth }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
