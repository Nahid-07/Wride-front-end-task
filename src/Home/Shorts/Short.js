import React from "react";

const Short = ({ short }) => {
  return (
    <div>
      <div className="avatar flex flex-col justify-center items-center">
        <div className="w-20 border-4 rounded-full">
          <img alt="" src={short.shortsImg} />
        </div>
        <p className="mt-2">Asif</p>
      </div>
    </div>
  );
};

export default Short;
