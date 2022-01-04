
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import MyWishlist from './MyWishlist/MyWishlist';


const MyWishlists = () => {
  const { user } = useAuth();
  const [Wishlists, setWishlists] = useState([])
  useEffect(() => {
    const url = `https://young-shore-30046.herokuapp.com/wishlist/${user.email}`
    fetch(url)
      .then(res => res.json())
      .then(data => setWishlists(data))
  }, [user])
  return (
    <>
      <Header />
      <div className="myorder">
        <h1 className="heading" style={{ backgroundColor: '#FCF6F6' }}>My Wishlist</h1>
        <div className="container">

          {Wishlists.length < 1 ? <>
            <div className="wishlist-no-data">
              <p><i className="far fa-heart" /></p>
            <p>There are no favorites yet.<br />Add your favorites to wishlist and they will show here.</p>
         <button className="btn-shopping" ><Link to="/product">CONTINUE SHOPPING</Link></button>
            </div>

          </> :

            <div className="row">
              {
                Wishlists.map(Wishlist => <MyWishlist
                  Wishlist={Wishlist}
                  key={Wishlist._id}
                ></MyWishlist>)
              }
            </div>
          }
        </div>
      </div>
      <Footer />
    </>

  );
};

export default MyWishlists;