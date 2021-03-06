import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const ContextWrapper = (props) => {
  const [prevYear, setPrevYear] = useState(2020);
  const [nextYear, setNextYear] = useState(2021);
  const [days, setDays] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        prevYear,
        setPrevYear,
        nextYear,
        setNextYear,
        days,
        setDays,
        posts,
        setPosts,
        isOpen,
        setIsOpen,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
