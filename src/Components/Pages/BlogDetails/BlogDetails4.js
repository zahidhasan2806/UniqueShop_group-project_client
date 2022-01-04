import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const BlogDetails4 = () => {
    return (
        <div>
            <Header></Header>

            <div className='container'>
                <div className='mt-5'>
                    <h2>Let shop more</h2>
                    <Breadcrumb className=''>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/blogs">
                            Blogs
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>BlogDetails</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className=''>
                    <img className='fluid container' src="https://cdn.shopify.com/s/files/1/2526/5844/articles/post5.jpg?v=1513062742" alt="" />
                </div>
                <div className='text-start mt-5'>
                    <p>Dec 12,2020</p>



                    <h3>Let shop more</h3>
                    <p> It has become the industry standard for design mockups and prototypes. By adding a little bit of Latin to a mockup, you are able to show clients a more complete
                        version of your design.Every Product is genuine you can check those also. If you face any problems just sent a message to us you can find that in contact us. We provide money back gurantte also.We value your money and we give the best service.Your appreciate your review feel free to review we will try to improve our services.</p>
                    <hr />
                    <div>

                        <i className='fa fa-tags' area-hidden="true"></i>
                        <a href="/blogs" className='ms-2 me-3 text-decoration-none text-black'>Accessories</a>
                        <a href="/blogs" className='text-decoration-none text-black'>Electronics</a>


                    </div>
                    <div className='mt-3'>
                        <label>Share this on: </label>
                        <a href="https://www.facebook.com/" className='ms-2 me-2 text-primary'><span><i className="fab fa-facebook-square"></i></span></a>
                        <a href="https://www.twitter.com/" className='ms-2 me-2 '><span><i className="fab fa-twitter"></i></span></a>
                        <a href="https://www.pinterest.com/" className='ms-2 me-2 text-danger'><span><i className="fab fa-pinterest-p"></i></span></a>
                        <a href="https://www.google.com/" className='ms-2 text-danger'><span><i className="fab fa-google"></i></span></a>
                    </div>




                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default BlogDetails4;