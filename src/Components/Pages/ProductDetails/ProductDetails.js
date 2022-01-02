import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetails.css";

const ProductDetails = () => {
    let { _id } = useParams();
  const [fullDetails, setFullDetails]=useState([]);
    useEffect(() => {
        fetch('https://young-shore-30046.herokuapp.com/products')
            .then(res => res.json())
        .then(data=>setFullDetails(data))
    }, [])

    const filteredProduct = fullDetails.find(product => product._id === _id);
    console.log(filteredProduct);
    return (
        <div className='container'>
             <div className='productDetail  d-flex justify-content-around align-items-center'>
           <div className="col-md-6"> <img src={filteredProduct?.image} alt="..." height="300px" /></div>
            <div className="col-md-6">
                <h6> {filteredProduct?.title}</h6>
                <ul>
                    <li>{filteredProduct?.desc1}</li>
                    <li>{filteredProduct?.desc2}</li>
                    <li>{filteredProduct?.desc3}</li>
                    <li>{filteredProduct?.desc4}</li>
                </ul>
                
           </div>

        </div>
       </div>
    );
};

export default ProductDetails;