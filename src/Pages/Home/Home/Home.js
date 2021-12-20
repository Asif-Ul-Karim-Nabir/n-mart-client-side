import React from 'react';
import BottomBanner from '../BottomBanner/BottomBanner';
import Products from '../Products/Products';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <Products />
            <BottomBanner />
        </div>
    );
};

export default Home;