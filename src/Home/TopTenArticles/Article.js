import React from "react";
import { HiOutlineHeart } from "react-icons/hi";

const Article = ({ article }) => {
  console.log(article);
  const { articaleImage, articleName, authorImage } = article;
  return (
    <div className="rounded-md shadow-md">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <div className="-space-y-1">
            <h2 className="text-xl font-semibold leading-none">
              {articleName}
            </h2>
          </div>
        </div>
      </div>
      <img
        src={articaleImage}
        alt=""
        className="object-cover object-center w-full h-72"
      />
      <div className="p-3">
        <div className="flex justify-between items-center">
          <div className="">
            <div className="avatar items-center">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-3">
                <img alt="" src={authorImage} />
              </div>
              <h3>Asif</h3>
            </div>
          </div>
          <div className="flex">
            <p className="text-gray-400 mr-3">10.2k</p>
            <HiOutlineHeart className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
