import dayjs from "dayjs";

export const getMonth = (month = dayjs().month(), year = 2020) => {
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let weekdayCount = 0 - firstDayOfTheMonth;

  const days = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      weekdayCount++;
      return dayjs(new Date(year, month, weekdayCount));
    });
  });

  return days;
};
