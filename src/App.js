import "./App.css";
import React, { useEffect } from "react";
import Month from "./components/Month";
import Header from "./components/Header";
import useDate from "./hooks/useDate";
const App = () => {
  const { loadData } = useDate();

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Month />
    </div>
  );
};

export default App;
