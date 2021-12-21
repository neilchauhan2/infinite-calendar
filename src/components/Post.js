import React from "react";
import StarRatingComponent from "react-star-rating-component";

const Post = ({ post }) => {
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
    </div>
  );
};

export default Post;
