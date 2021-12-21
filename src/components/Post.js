import React from "react";
import StarRatingComponent from "react-star-rating-component";
import Legend from "./Legend";

const Post = ({ post }) => {
  const prepareLegend = () => {
    const legends = [];

    post.typeofday.map((legend) => {
      if (legend === "hair cut") {
        legends.push({ text: "Cu", color: "bg-pink-100" });
      } else if (legend === "protein treatment") {
        legends.push({ text: "Pr", color: "bg-blue-200" });
      } else if (legend === "hair color") {
        legends.push({ text: "HC", color: "bg-purple-300" });
      } else if (legend === "deep conditioning") {
        legends.push({ text: "DC", color: "bg-green-200" });
      } else if (legend === "clarifying") {
        legends.push({ text: "C", color: "bg-red-300" });
      } else if (legend === "hair oiling") {
        legends.push({ text: "HO", color: "bg-violet-300" });
      }
    });
    return legends.length > 0 ? legends : null;
  };

  const legends = post.typeofday != null ? prepareLegend() : null;

  return (
    <div className="post py-2 px-6">
      <StarRatingComponent
        name="rating"
        starCount={5}
        value={post.rating}
        starColor="#5DADE2"
        className="px-10 text-sm"
        key={post.id + "-rating"}
      />
      <img src={post.media[0].mediaurl} alt="post-img" />
      <div className="flex justify-center items-center">
        <Legend />
        {post.typeofday !== null &&
          legends.map((l) => (
            <Legend
              text={l.text}
              color={l.color}
              key={post.id + l.text + "-legend"}
            />
          ))}
      </div>
    </div>
  );
};

export default Post;
