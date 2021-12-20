import "./App.css";
import React, { useEffect, useContext } from "react";
import Month from "./components/Month";
import Header from "./components/Header";
import useDate from "./hooks/useDate";
import GlobalContext from "./context/GlobalContext";

const App = () => {
  const { loadData } = useDate();
  const { prevYear, nextYear } = useContext(GlobalContext);
  useEffect(() => {
    loadData();
  }, [prevYear, nextYear]);

  return (
    <div className="App">
      <Header />
      <Month />
    </div>
  );
};

export default App;
