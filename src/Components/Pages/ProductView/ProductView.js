import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import useAuth from '../../Hook/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Spinner from '../Spinner/Spinner';
import './ProductView.css';


const ProductView = () => {
    const { user } = useAuth();
    let { productId } = useParams()
    const location = useLocation();
    const [product, setProduct] = useState([])
    const [isloading, setIsLoading] = useState(true);
    const sharelink = (`https://unique-online-shop.web.app${location.pathname}`)
    useEffect(() => {
        const url = `https://young-shore-30046.herokuapp.com/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
            .finally(() => setIsLoading(false))
    }, [productId])


    const { _id, price, image, desc1, desc2, desc3, desc4, title, Categories } = product;

    const wishlistSubmit = () => {
        let databody = {
            "user_email": user.email,
            "product_deatils": product
        }

        fetch('https://young-shore-30046.herokuapp.com/wishlist', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(databody),
        })
            .then((res) => res.json())
            .then((result) => {

            })
    }
    if (isloading) {
        return (
           <Spinner />
        )

    } else {

        return (
            <>
                <Header />
                <div className="container product-view">

                    <div className="d-flex prodcout-sec">

                        <div>
                            <img className="product-image" src={`data:image/png;base64,${image}`} alt={title} />
                        </div>

                        <div className="product-content">
                            <h2 className="product-title">{title}</h2>
                            <h2 className="product-price">(approx. ${price})</h2>
                            <h2 className="product-price">Categories: {Categories}</h2>
                            <button type="button" className="share-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="fas fa-share-alt"></i>
                            </button>
                            <button className="Wishlist-icon" onClick={() => wishlistSubmit()}><i class="far fa-heart"></i></button>
                            <p className="product-description">{desc1 + desc2 + desc3 + desc4}</p>
                            <div className="produt-btn">
                                <Link to={`/buyProducts/${_id}`}><button className="buy-now-btn">BUY</button></Link>


                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">

                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <button type="button" className="close-btn" data-bs-dismiss="modal"><img src="https://i.ibb.co/SfJQmw7/cors-btn.png" alt="" /></button>
                                            <div className="modal-body text-center">

                                                <FacebookShareButton className="m-2"
                                                    url={sharelink}

                                                >
                                                    <FacebookIcon logofillcolor="white" />

                                                </FacebookShareButton>

                                                <TwitterShareButton
                                                    className="m-2"
                                                    url={sharelink}
                                                >

                                                    <TwitterIcon logofillcolor="white" />
                                                </TwitterShareButton>

                                                <LinkedinShareButton
                                                    className="m-2"
                                                    url={sharelink}

                                                >
                                                    <LinkedinIcon logofillcolor="white" />
                                                </LinkedinShareButton>

                                                <EmailShareButton
                                                    className="m-2"
                                                    url={sharelink}

                                                >
                                                    <EmailIcon logofillcolor="white" />
                                                </EmailShareButton>

                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
};

export default ProductView;