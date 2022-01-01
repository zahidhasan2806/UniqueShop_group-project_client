import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://young-shore-30046.herokuapp.com/products')
            .then(res => res.json())
        .then(data=>setProducts(data))
    }, [])
    return (
        <div className='container'>
            total data={products.length}
            <h5>Best Selling</h5>
            <Row xs={1} md={4} className="g-4">
            {
                products.map(product=><SingleProduct key={products._id} product={product}></SingleProduct>)
            }
  
</Row>


        </div>
    );
};

export default Product;