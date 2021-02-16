import React from 'react';
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";

const Cart = () => {

    const isFavoritedArr = useSelector(state => state.appreducer.isFavoritedArr);


    return (
        <div className="pg-title">
            <h1>Cart</h1>
            <div className="row">
                {isFavoritedArr.length > 0 ? isFavoritedArr.map((favitem) => (
                    <div className="column">
                        <div className="card" key={`${favitem.id}`}>
                            <img src={favitem.url} alt={favitem.id} style={{ width: "100%", height: "200px" }} />
                            <div className="card-icon-wrp">
                                <div>
                                    <h3>Favorite Item  <FaHeart /></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : <div className="empty-cart">Your Cart Is Empty</div>}
            </div>
        </div>
    );
}

export default Cart;