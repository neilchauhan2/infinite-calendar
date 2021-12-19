import { useState, useEffect } from "react";
import moment from "moment";

const useDate = () => {
  const [startYear, setStartYear] = useState(2020);
  const [endYear, setEndYear] = useState(2021);
  const [dates, setDates] = useState([]);
  // useEffect(() => {
  //   const newDates = getDates(startYear, endYear);
  //   return newDates;
  // }, []);

  const loadPrev = () => {
    const newDates = getDates(startYear - 1, endYear - 1);
    setStartYear(startYear - 1);
    setEndYear(endYear - 1);
    console.log(startYear, endYear);
    return newDates;
  };

  const loadNext = () => {
    const newDates = getDates(startYear + 1, endYear + 1);
    setStartYear(startYear + 1);
    setEndYear(endYear + 1);
    console.log(startYear, endYear);
    return newDates;
  };

  const loadInitial = () => {
    const dates = getDates(2020, 2021);
    return dates;
  };

  return {
    loadPrev,
    loadNext,
    loadInitial,
  };
};

export const getDates = (startYear, endYear) => {
  const getDaysBetweenDates = function (startDate, endDate) {
    const now = startDate.clone(),
      dates = [];

    while (now.isSameOrBefore(endDate)) {
      dates.push({
        day: now.format("D"),
        month: now.format("MM"),
        year: now.format("YYYY"),
      });
      now.add(1, "days");
    }
    console.log(startYear, endYear);
    return dates;
  };

  const startDate = moment(`${startYear}-12-01`);
  const endDate = moment(`${endYear}-11-30`);

  const dateList = getDaysBetweenDates(startDate, endDate);
  return dateList;
};

export default useDate;
