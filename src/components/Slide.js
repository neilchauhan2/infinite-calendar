import React from "react";
import Legend from "./Legend";
import { prepareLegend } from "../utils";
import StarRatingComponent from "react-star-rating-component";

const Slide = ({ post }) => {
  const legends = post.typeofday != null ? prepareLegend(post) : null;

  return (
    <div className="rounded-md mx-auto my-2 h-2/4 w-72 bg-white shadow-md ">
      <img src={post.media[0].mediaurl} alt="img" className="rounded-t-md" />
      <div className="flex ml-2">
        {post.typeofday !== null &&
          legends.map((l) => (
            <Legend
              text={l.text}
              color={l.color}
              key={post.id + l.text + "-legend"}
            />
          ))}
        <div
          className={`mt-2 ${
            legends === null ? "ml-48" : legends.length > 1 ? "ml-32" : "ml-40"
          }`}
        >
          <StarRatingComponent
            name="rating"
            starCount={5}
            value={4}
            starColor="#5DADE2"
            className="text-sm"
            key={"-rating"}
          />
        </div>
      </div>
      <div className="px-4">
        <h1 className="text-lg font-bold text-gray-600">
          {post.calendardatetime.format("DD MMMM")}
        </h1>
        <p className="text-sm">{post.text}</p>
      </div>
      <button className="bg-white py-2 mt-2 rounded-b-lg border-t-2 border-gray-300 w-full font-bold text-gray-600 place-content-center">
        View Full Post
      </button>
    </div>
  );
};

export default Slide;
