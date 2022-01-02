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
        <div>
            <h1 className="m-5">Feature Collections</h1>
            <div className="d-flex justify-content-center">
                <h3 className="pe-3">Accesories</h3>
                <h3 className="pe-3">Smart TV</h3>
                <h3 className="pe-3">Camera</h3>
                <h3 className="pe-3">Digital</h3>
            </div>
            <div className="services">
                <h1>Feature Collections</h1>
                <div className="row container">
                    {services.slice(0, 8)?.map((pd, index) => (
                        <div className="col-md-12 col-lg-3 mt-2">
                            <div className="service p-3 border border mt-5 me-4  products-card">
                                <div className="service-img">
                                    <Link to={`/product/${pd._id}`}>
                                        {" "}
                                        <img className="w-100" src={pd?.image} alt="" />
                                    </Link>

                                </div>


                                <Link to={`/product/${pd._id}`}>
                                    {" "}
                                    <h6>{pd.title}</h6>
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
