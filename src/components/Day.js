import React from "react";
import dayjs from "dayjs";

const Day = ({ day }) => {
  const date =
    day !== null ? dayjs(new Date(day.year, day.month - 1, day.date)) : 0;
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {day !== null && (
          <>
            <p className="text-sm p-1 my-1 text-center">{date.format("ddd")}</p>
            <p className="text-sm p-1 my-1 text-center">
              {date.format("MMM")} {date.format("D")}, {date.format("YYYY")}
            </p>
          </>
        )}
      </header>
    </div>
  );
};

export default Day;
