import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import RecommendArticle from "./RecommendArticle";

const RecommendedArticles = () => {
  const [topArticles, setTopArticles] = useState([]);
  useEffect(() => {
    fetch("recomnded.json")
      .then((res) => res.json())
      .then((data) => setTopArticles(data));
  }, []);
  return (
    <section className="my-16">
      <div className="flex justify-between mx-5 mb-3">
        <h4 className=" text-xl md:text-2xl font-bold">Recommended for you</h4>
        <div className="flex justify-between">
          <h4 className="text-gray-400">
            <FaArrowLeft className="inline " /> <span>prev</span>
          </h4>
          <h4 className="text-gray-400 ml-5">
            <span>Next</span> <FaArrowRight className="inline " />
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border p-6 mx-5 gap-6">
        {topArticles.map((article, i) => (
          <RecommendArticle key={i} article={article}></RecommendArticle>
        ))}
      </div>
    </section>
  );
};

export default RecommendedArticles;
