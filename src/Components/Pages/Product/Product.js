import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SingleProduct from '../SingleProduct/SingleProduct';

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://young-shore-30046.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <Header />
            <div className='Feature'>
                {/* total data={products.length} */}
                <h1 className=''>Best Selling</h1>

                <div className="container row">
                    {
                        products.map(product => <SingleProduct key={products._id} product={product}></SingleProduct>)
                    }
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Product;