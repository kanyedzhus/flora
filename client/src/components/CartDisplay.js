import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import Api from '../helpers/Api';
import CartContext from '../CartContext';
import './CartDisplay.css';

const CartDisplay = ({user}) => {
    const [errorMsg, setErrorMsg] = useState("");
    const [cartTotal, setCartTotal] = useState("");

    let { cart, increaseOrderCountCB, decreaseOrderCountCB, deleteFromCartCB } = useContext(CartContext);

    useEffect(() => {
      if (cart.length > 0) {
        let total = cart.map(i=>i.subtotal).reduce((a,b)=>a+b)
        setCartTotal(total);
      }
    }, [cart]);

    const handleIncrease = (id, current, price) => {
        increaseOrderCountCB(id, current, price);
    }
    
      const handleDecrease = (id, current, price) => {
        decreaseOrderCountCB(id, current, price);
    }

    const handleDelete = (productid) => {
        deleteFromCartCB(productid);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">

                {cart.map(cartitem => (
            <div 
            key={cartitem.productid}
            className="cart-item d-flex mb-3 bg-light p-3 shadow-sm text-dark">
            
            <div className="cart-img-and-text d-flex">        
            <img className="cart-thumb" src={cartitem.imgurl} />
            <div className="ms-3 d-flex flex-column align-items-start">
            <h5>{cartitem.name}</h5>
            <p className="text-start fs-6">{cartitem.description.substring(0,100)}...<Link to={`/products/${cartitem.productid}`}>View full description</Link></p>
            </div>
            </div>

            <div className="cart-buttons d-flex align-items-center justify-content-center">
            <div>€{(cartitem.subtotal/100).toFixed(2)}</div>  
            <div className="d-flex align-items-center justify-content-center mt-2"><button className="btn btn-cart-left btn-sm text-light" onClick={e => handleIncrease(cartitem.productid, cartitem.quantity, cartitem.price)}> + </button><div id="quantity" className="cart-quantity d-flex align-items-center justify-content-center">{cartitem.quantity}</div><button className="btn btn-cart-right btn-sm text-light" onClick={e => handleDecrease(cartitem.productid, cartitem.quantity, cartitem.price)}>-</button></div>
            <button className="btn btn-danger mt-2"onClick={e => handleDelete(cartitem.productid)}>Delete</button></div>


            </div>
        ))}
                </div>
                <div className="col-md-4">

                <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center shadow-sm py-3">
                <div className="d-flex justify-content-end fw-bold fs-4">TOTAL: €{(cartTotal/100).toFixed(2)}</div>
                <form action="/create-checkout-session" method="POST">
                <input name="userid" value={user.userid} readOnly className="d-none" />
                <button type="submit" id="checkout-button" className="btn mt-3 px-3 py-2 fs-5">Checkout</button>
                </form>
                </div>

                </div>
            </div>
        </div>
    )
}

export default CartDisplay