import React from 'react';
import LatestArticles from './LatestArticles/LatestArticles';
import RecommendedArticles from './Recommended/RecommendedArticles';
import TopTenArticles from './TopTenArticles/TopTenArticles';

const Home = () => {
    return (
        <>
            <TopTenArticles></TopTenArticles>
            <RecommendedArticles></RecommendedArticles>
            <LatestArticles></LatestArticles>
        </>
    );
};

export default Home;