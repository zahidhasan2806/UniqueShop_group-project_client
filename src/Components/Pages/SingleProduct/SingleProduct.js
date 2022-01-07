import React from 'react';
import { Link } from 'react-router-dom';
import '../../Pages/Home/Featured/Featured.css';
const SingleProduct = (props) => {
  const { image, title, price, _id } = props.product;

  return (
    <div className="col-md-12 col-lg-3 mt-2">

      <div className="service p-3 border mt-5 me-4  products-card">
        <div className="service-img-container">
          <img className="w-100 image" src={`data:image/png;base64,${image}`} alt="" />
          <div className="overlay">
            <div className="text">
              <div className="Product-view-btn">
                <Link to={`/product/${_id}`}>View</Link>
              </div>
              <div className="Product-buy-btn">
                <Link to={`/buyProducts/${_id}`}>Buy Now</Link>
              </div>
            </div>
          </div>

        </div>
        <Link to={`/product/${_id}`}>
          {" "}
          <h5 className="mt-4">{title}</h5>
        </Link>
        <p className="product-price">Price: {price}</p>
      </div>

    </div>
  );
};

export default SingleProduct;