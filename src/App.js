import "./App.css";
import { getMonth } from "./utils";
import Month from "./components/Month";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [curMonth, setCurMonth] = useState(getMonth(10));

  return (
    <div className="App">
      <Header />
      <Month month={curMonth} />
    </div>
  );
}

export default App;
