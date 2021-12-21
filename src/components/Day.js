import React, { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
import Post from "./Post";

const Day = ({ day, rowIdx }) => {
  const { posts } = useContext(GlobalContext);
  const date =
    day !== null ? dayjs(new Date(day.year, day.month - 1, day.date)) : 0;
  return (
    <div
      className={
        "border border-gray-200 flex flex-col" +
        (rowIdx % 7 === 0 ? " bg-stone-100 " : " ")
      }
    >
      <header className="flex flex-col items-center">
        {day !== null && (
          <>
            <p className="text-sm p-1 my-1 text-center">
              {date.format("MMM")} {date.format("D")}, {date.format("YYYY")}
            </p>
            {posts.map((post) => {
              const d = post.calendardatetime.format("DD");
              const m = post.calendardatetime.format("MM");
              const y = post.calendardatetime.format("YYYY");
              return (
                date &&
                date.format("DD") === d &&
                date.format("MM") === m &&
                date.format("YYYY") === y && <Post post={post} key={post.id} />
              );
            })}
          </>
        )}
      </header>
    </div>
  );
};

export default Day;
