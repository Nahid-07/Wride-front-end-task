import React from 'react';
import RecommendedArticles from './Recommended/RecommendedArticles';
import TopTenArticles from './TopTenArticles/TopTenArticles';

const Home = () => {
    return (
        <>
            <TopTenArticles></TopTenArticles>
            <RecommendedArticles></RecommendedArticles>
        </>
    );
};

export default Home;