import React, { useEffect, useState } from "react";
import Day from "./Day";
import useDate from "../hooks/useDate";
import BxInfiniteScroll from "bx-stable-infinite-scroll";
import { map, concat } from "lodash";

const Month = () => {
  const { loadInitial, loadNext, loadPrev } = useDate();
  const [items, setItems] = useState([...loadInitial()]);
  const [loadingNext, setLoadingNext] = useState(false);
  const [loadingPrevious, setLoadingPrevious] = useState(false);

  const handleNextDataLoad = () => {
    setLoadingNext(true);
    setTimeout(() => {
      // const time = new Date().toLocaleTimeString();

      setItems((prevItems) => concat(prevItems, loadNext()));

      setLoadingNext(false);
    }, 1000);
  };

  const handlePreviousDataLoad = () => {
    setLoadingPrevious(true);
    setTimeout(() => {
      // const time = new Date().toLocaleTimeString();

      setItems((prevItems) => concat(loadPrev(), prevItems));

      setLoadingPrevious(false);
    }, 1000);
  };

  return (
    <>
      <div
        className="h-96 w-4/5 px-8 my-10 mx-10"
        style={{
          boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
          // height: "300px",
          // width: "500px",
          // margin: "24px 0",
        }}
      >
        <BxInfiniteScroll
          loadingComponent={
            <div style={{ padding: "8px 16px" }}>Loading 5 more items...</div>
          }
          nextDataFn={handleNextDataLoad}
          nextEnd={false}
          nextLoading={loadingNext}
          previousDataFn={handlePreviousDataLoad}
          previousEnd={false}
          previousLoading={loadingPrevious}
        >
          {map(items, (date) => {
            return (
              <Day
                day={date.day}
                month={date.month}
                year={date.year}
                key={`${date.day}-${date.month}-${date.year}`}
              />
            );
          })}
        </BxInfiniteScroll>
      </div>
    </>
  );

  // const { loadInitial, loadNext, loadPrev } = useDate();
  // const [dates, setDates] = useState([...loadInitial()]);

  // useEffect(() => {
  //   loadInitial();
  // }, []);

  // const [loadingNext, setLoadingNext] = useState(false);
  // const [loadingPrevious, setLoadingPrevious] = useState(false);

  // const handleNextDataLoad = () => {
  //   setLoadingNext(true);
  //   console.log("next");
  //   setTimeout(() => {
  //     const newDates = loadNext();
  //     setDates((dates) => dates.concat(newDates));
  //     setLoadingNext(false);
  //   }, 100);
  // };

  // const handlePreviousDataLoad = () => {
  //   setLoadingPrevious(true);
  //   console.log("prev");
  //   setTimeout(() => {
  //     const newDates = loadPrev();
  //     setDates((dates) => newDates.concat(dates));
  //     setLoadingPrevious(false);
  //   }, 100);
  // };

  // return (
  //   <div>
  //     <BxInfiniteScroll
  //       loadingComponent={
  //         <div style={{ padding: "8px 16px" }}>Loading 5 more items...</div>
  //       }
  //       nextDataFn={handleNextDataLoad}
  //       nextEnd={false}
  //       nextLoading={loadingNext}
  //       previousDataFn={handlePreviousDataLoad}
  //       previousEnd={false}
  //       previousLoading={loadingPrevious}
  //     >
  //       <div className="flex-1 grid grid-cols-7 grid-rows-5">
  //         {dates.map((date) => (
  //           <Day
  //             day={date.day}
  //             month={date.month}
  //             year={date.year}
  //             key={`${date.day}-${date.month}-${date.year}`}
  //           />
  //         ))}
  //       </div>
  //     </BxInfiniteScroll>
  //   </div>
  // );
};

export default Month;
