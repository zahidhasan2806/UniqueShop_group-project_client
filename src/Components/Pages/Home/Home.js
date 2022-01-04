import React from 'react';
import Footer from './../../Shared/Footer/Footer';
import Header from './../../Shared/Header/Header';
import Banner2 from './Banner2/Banner2';
import Banner3 from './Banner3/Banner3';
import Featured from './Featured/Featured';
import FeaturedCollection from './FeaturedCollection/FeaturedCollection';
import ShippingType from './ShippingType/ShippingType';
import Slider from './Slider/Slider';

const Home = () => {

    return (
        <div>
            <Header />
           <Slider />
           <ShippingType />
           <Banner2 />
           <Featured />
           <Banner3 />
           <FeaturedCollection />
           <Footer />
        </div>
    );
};


export default Home;