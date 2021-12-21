import React from "react";
import Legend from "./Legend";
import StarRatingComponent from "react-star-rating-component";

const Slide = () => {
  return (
    <div className="rounded-md mx-4 my-2 h-2/4 w-72 bg-white shadow-md ">
      <img
        src="https://ik.imagekit.io/bj96n986jb/prod/adbef521-7cf6-4344-af48-a9480df46549_fd85c711-9c37-4e73-9690-70f5a84477d3_cyYpwDTJq"
        alt="img"
        className="rounded-t-md"
      />
      <div className="flex px-3">
        <Legend text={"DC"} color={"bg-violet-200"} />
        <div className="ml-20 mt-2">
          <StarRatingComponent
            name="rating"
            starCount={5}
            value={4}
            starColor="#5DADE2"
            className="px-10 text-sm"
            key={"-rating"}
          />
        </div>
      </div>
      <div className="px-4">
        <h1 className="text-lg font-bold text-gray-600">29 December</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolore
          repellendus minima corrupti iusto in quisquam magnam illum nemo fugit,
          ex veniam pariatur, eius quo modi cumque incidunt optio quidem
          perferendis soluta facere. Enim nisi doloribus sequi voluptas,
          consequuntur ea quia vitae, repellat modi sed, excepturi dicta
          incidunt ducimus neque.
        </p>
      </div>
      <button className="bg-white py-2 mt-2 border-t-2 border-gray-300 w-full font-bold text-gray-600 place-content-center">
        View Full Post
      </button>
    </div>
  );
};

export default Slide;
