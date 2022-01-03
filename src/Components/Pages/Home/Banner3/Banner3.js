import React from 'react';
import { Link } from 'react-router-dom';
import './Banner3.css';

const Banner3 = () => {
    return (
        <div className="banner3">
            <div className="container">
                <div className="row">
                    <div className="single-col col-lg-4 col-md-12">
                        <div to="product" alt="shop" className="single-banner">
                            <img src="https://i.ibb.co/F4cr1HX/banner112-540x.jpg" alt="" />
                            <div className="item-disc ">
                                <h4 className="">WORK AT HOME SALE</h4>
                                <h1 className="pb-2">70%</h1>
                                <Link className="get-it" to="/">Get it Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="single-col col-lg-4 col-md-12">
                        <div to="product" alt="Home" className="single-banner">
                            <img src="https://i.ibb.co/kB8gYfD/prelic2-0-540x.jpg" alt="" />
                            <div className="item-btn item-disc">
                                <Link className="banner3-buy-now" to="/">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="single-col col-lg-4 col-md-12">
                        <div to="shop" alt="Home" className="single-banner">
                            <img src="https://i.ibb.co/tXrM1gJ/banner2-540x.jpg" alt="" />
                            <div className="item-disc">
                                <span className="item-title heading">SUMMER SALE</span>
                                <span className="item-amount up-t030"><h1>UP TO 30%</h1></span>
                                <div className="banner3-shop-div"><Link className="banner3-shop-now" to="/">Shop Now</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner3;