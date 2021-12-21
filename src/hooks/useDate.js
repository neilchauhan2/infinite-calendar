import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const useDate = () => {
  const { prevYear, nextYear, setPrevYear, setNextYear, setDays } =
    useContext(GlobalContext);

  const setLastDate = (month, year) => {
    let curMonth = { lastDate: 0 };
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12
    ) {
      curMonth.lastDate = 31;
    } else if (month === 2) {
      if (year % 4 === 0 || year % 400 === 0) {
        curMonth.lastDate = 29;
      } else {
        curMonth.lastDate = 28;
      }
    } else {
      curMonth.lastDate = 30;
    }
    return curMonth;
  };

  const loadData = () => {
    let data = [];
    for (let curYear = prevYear; curYear <= nextYear; curYear++) {
      let month = 1;
      let dateObject = { lastDate: 1 };
      let firstDay = new Date(curYear, 0, 1).getDay();
      dateObject.firstDay = firstDay;
      dateObject.month = month;
      for (let curMonth = month; curMonth <= 12; curMonth++) {
        let objDate = setLastDate(curMonth, curYear);
        for (let curDate = 1; curDate <= objDate["lastDate"]; curDate++) {
          if (curDate === 1 && curMonth === 1 && curYear === prevYear) {
            for (let l = -1; l < firstDay - 1; l++) data.push(null);
          }
          data.push({
            month: curMonth,
            year: curYear,
            date: curDate,
          });
        }
      }
    }
    setDays(data);
  };

  const loadPreviousYear = () => {
    if (nextYear - 1 - (prevYear - 1) > 2) {
      setPrevYear(prevYear - 1);
      setNextYear(nextYear - 1);
    } else {
      setPrevYear(prevYear - 1);
    }
  };

  const loadNextYear = () => {
    if (nextYear + 1 - (prevYear + 1) > 2) {
      setNextYear(nextYear + 1);
      setPrevYear(prevYear + 1);
    } else {
      setNextYear(nextYear + 1);
    }
  };

  return {
    loadData,
    loadNextYear,
    loadPreviousYear,
  };
};

export default useDate;
