
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';
import Myorder from './MyOrder/Myorder';


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `https://young-shore-30046.herokuapp.com/orders/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])
    console.log(orders.length);
    return (
        <div className="myorder">
            <h1 className="heading" style={{ backgroundColor: '#FCF6F6' }}>My Order</h1>
            <div className="container">

                {orders?.length < 1 ? <h2>Sorry!You've not order yet.</h2> : <div className="row">
                    {
                        orders.map(order => <Myorder
                            order={order}
                            key={order._id}
                        ></Myorder>)
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default MyOrders;