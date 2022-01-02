import React from 'react';
import './ShippingType.css';
const ShippingType = () => {
    return (

        <div className="container ShippingType ">
            <hr />
            <div className="row">
                <div className="col-lg-4 col-md-12 common-dev">
                    <div>
                        <img src="https://i.ibb.co/YhPXwRW/free-delivery-64-px-2x-120x.png" alt="" />
                    </div>
                    <div>
                        <h4>FREE SHIPPING</h4>
                        <p>Free shipping on all US order</p>
                        <p>or order above $100</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 common-dev">
                    <div>
                        <img src="https://i.ibb.co/YXQTyfN/parcel-tracking-64-px-2x-120x.png" alt="" />

                    </div>
                    <div>
                        <h4>SUPPORT 24/7</h4>
                        <p>Contact us 24 hours a day</p>
                        <p>7 days a week</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 common-dev">
                    <div>
                        <img src="https://i.ibb.co/fDWY6fr/icon-128x128-120x.png" alt="" />
                    </div>
                    <div>
                        <h4>30 DAYS RETURN</h4>
                        <p>Simply return it within 30</p>
                        <p>days for an exchange.</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>

    );
};

export default ShippingType;