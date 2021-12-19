import "./App.css";
import { getMonth } from "./utils";
import Month from "./components/Month";
import { useState } from "react";

function App() {
  const [curMonth, setCurMonth] = useState(getMonth(11));

  return (
    <div className="App">
      <Month month={curMonth} />
    </div>
  );
}

export default App;
