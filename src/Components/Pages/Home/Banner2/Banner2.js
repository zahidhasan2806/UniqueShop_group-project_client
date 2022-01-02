import React from 'react';
import { Link } from 'react-router-dom';
import './Banner2.css';
const Banner2 = () => {
    return (
        <div className="banner2">
            <div className="container">
                <div className="row">
                    <div className="single-col col-lg-6 col-md-12">
                        <Link to="shop" alt="Home" className="single-banner">
                            <img src="https://i.ibb.co/nRpR9j9/s10-720x.jpg" alt="" />
                            <div className="item-disc">
                                <span className="item-title">Galaxy S10 Lite</span>
                                <span className="item-amount">Save up to 25%</span>
                                <span className="item-amount buy-now-btn "><Link to="/">Buy Now</Link></span>
                            </div>
                        </Link>
                    </div>
                    <div className="single-col col-lg-6 col-md-12">
                        <Link to="shop" alt="Home" className="single-banner">
                            <img src="https://i.ibb.co/CtjtcbP/smartwatch-720x.jpg" alt="" />
                            <div className="item-disc">
                                <span className="item-title">New SmartWatch</span>
                                <span className="item-amount">Save up to 35%</span>
                                <span className="item-amount buy-now-btn "><Link to="/">Buy Now</Link></span>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="single-col col-lg-6 col-md-12">
                        <Link to="shop" alt="shop" className="single-banner">
                            <img src="https://i.ibb.co/d7TC5Xj/laptop-720x.jpg" alt="" />
                            <div className="item-disc">
                                <span className="item-title">Dell XPS 2020</span>
                                <span className="item-amount text">Engineered to run on ultra-fast <br />networks.</span>
                                <span className="item-amount buy-now-btn "><Link to="/">Buy Now</Link></span>
                            </div>

                        </Link>

                    </div>
                    <div className="single-col col-lg-6 col-md-12">
                        <Link to="shop" alt="Home" className="single-banner">
                            <img src="https://i.ibb.co/J3ZCs1r/tv-720x.jpg" alt="" />
                            <div className="item-disc">
                                <span className="item-title">Save up to </span>
                                <span className="item-amount">Plus earn 2% back in Kalles</span>
                                <span className="item-amount buy-now-btn "><Link to="/">Buy Now</Link></span>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner2;