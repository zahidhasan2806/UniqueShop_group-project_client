import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://young-shore-30046.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    console.log(services);
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
                <div className="row container">
                    {services.slice(0, 6)?.map((pd, index) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="service p-3 border border m-2">
                                <div className="service-img">
                                    <Link to={`/purchasing/${pd._id}`}>
                                        {" "}
                                        <img className="w-50" src={pd?.image} alt="" />
                                    </Link>

                                </div>


                                <Link to={`/purchasing/${pd._id}`}>
                                    {" "}
                                    <h6>{pd.title}</h6>
                                </Link>
                                <p className="text-danger">Price: {pd.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Featured;
