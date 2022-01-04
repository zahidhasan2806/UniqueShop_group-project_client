import React from 'react';
import { Link } from 'react-router-dom';
import './../MyWishlists.css';
const MyWishlist = ({Wishlist}) => {
    const {_id}=Wishlist;
    const {title,image,price}=Wishlist.product_deatils;
    const wishlistproductId=Wishlist.product_deatils._id;
    
    const handleDelete = () => {
        const url = `https://young-shore-30046.herokuapp.com/wishlist/${_id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload();
            })



    }
    return (
        <div className="wishlist">
            <div className="col-md-12 my-order-details">
            <div className="d-flex align-items-center ">
                <div className="my-order-img">
                    <img src={`data:image/png;base64,${image}`} alt="" />
                    
                </div>
                <div className="d-flex">
                    <div className="my-order-title">
                        <p className="wishlist-title"><Link  to={`/product/${wishlistproductId}`}>{title}</Link></p>
                    </div>
                    <div className="myprder-price">
                        <p>${price}</p>
                    </div>
                    <div className="buy-now-dev">
                        <Link to={`/buyProducts/${wishlistproductId}`}  >Buy Now</Link>
                    </div>
                    <div onClick={() => handleDelete(_id)}>
                    <i class="far fa-trash-alt"></i>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyWishlist;