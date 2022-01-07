import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Featured.css';
const Featured = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://young-shore-30046.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div className="Feature">
            <div className="services">
                <h1>Best Selling </h1>
                <div className="row container">
                    {services.slice(0, 8)?.map((pd, index) => (
                        <div className="col-md-12 col-lg-3 mt-2">
                            <div className="service p-3 border mt-5 me-4  products-card">
                                <div className="service-img-container">
                                    <img className="w-100 image" src={`data:image/png;base64,${pd.image}`} alt="" />
                                    <div className="overlay">
                                        <div className="text">
                                            <div className="Product-view-btn">
                                                <Link to={`/product/${pd._id}`}>View</Link>
                                            </div>
                                            <div className="Product-buy-btn">
                                                <Link to={`/buyProducts/${pd._id}`}>Buy Now</Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <Link to={`/product/${pd._id}`}>
                                    {" "}
                                    <h5 className="mt-4">{pd.title}</h5>
                                </Link>
                                <p className="product-price">Price: {pd.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Featured;
