import React from 'react';
import Header from './Header/Header';
import LatestArticles from './LatestArticles/LatestArticles';
import RecommendedArticles from './Recommended/RecommendedArticles';
import TopTenArticles from './TopTenArticles/TopTenArticles';

const Home = () => {
    return (
        <>
            <Header></Header>
            <TopTenArticles></TopTenArticles>
            <RecommendedArticles></RecommendedArticles>
            <LatestArticles></LatestArticles>
        </>
    );
};

export default Home;