import "./App.css";
// import { getDates } from "./utils";
import Month from "./components/Month";
// import { useRef, useEffect, useCallback, useState } from "react";

// import useDate from "./hooks/useDate";

function App() {
  // const ref = useRef();

  // const { dates, loadNext, loadPrev } = useDate();

  // // The scroll listener
  // const handleScroll = (e) => {
  //   const scrollHeight = e.target.documentElement.scrollHeight;
  //   const currentHeight = Math.ceil(
  //     e.target.documentElement.scrollTop + window.innerHeight
  //   );

  //   if (currentHeight + 1 >= scrollHeight) {
  //     loadNext();
  //   }
  // };

  // // Attach the scroll listener to the div
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // }, [handleScroll]);
  // console.log(dates);

  // // const dates = getDates();
  // getDates();
  return (
    <div className="App">
      <Month />
    </div>
  );
}

export default App;
