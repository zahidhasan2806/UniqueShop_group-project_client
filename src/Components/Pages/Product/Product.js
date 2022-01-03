import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SingleProduct from '../SingleProduct/SingleProduct';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://young-shore-30046.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(() => setIsLoading(false))
    }, []);
    if (isloading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    } else {
        return (
            <>
                <Header />
                <div className='container'>
                    {/* total data={products.length} */}
                    <h1 className='m-5'>Best Selling</h1>
                    <Row xs={1} md={4} className="g-4">
                        {
                            products.map(product => <SingleProduct key={products._id} product={product}></SingleProduct>)
                        }

                    </Row>


                </div>
                <Footer />
            </>
        );
    };
}

export default Product;