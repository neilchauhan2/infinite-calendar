import React from "react";
import StarRatingComponent from "react-star-rating-component";

import useModal from "../hooks/useModal";
import { prepareLegend } from "../utils";
import Legend from "./Legend";

const Post = ({ post, idx }) => {
  const legends = post.typeofday != null ? prepareLegend(post) : null;
  const { openModal } = useModal();

  const handleModal = () => {
    openModal();
  };

  return (
    <div className="post py-2 px-5" onClick={handleModal}>
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
