import React, { useContext } from "react";
import "../Cart/Cart.css";
import FoodContext from "../../Context/foodContex";
import Title from "../Title/Title";
import cartImg from "../../images/cart.svg";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const context = useContext(FoodContext);
  const { cart, closeCart, cartData, setCartData } = context;

  const handleQtyPlus = (product) => {
    const updatedCart = cartData.map((item) =>
      item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartData(updatedCart);
  };

  const handleQtyMinus = (product) => {
    const updatedCart = cartData.map((item) =>
      item._id === product._id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartData(updatedCart);
  };

  const handleRemove = (product) => {
    const updatedCart = cartData.filter((item) => item._id !== product._id);
    setCartData(updatedCart);
  };

  return (
    <div className={`cart ${cart === "" ? "" : cart}`}>
      <div className="cartHeader">
        <Title h2="Your Cart" />
        <div className="totalItem">
          <h5>Total items: {cartData.length}</h5>
        </div>
        <div className="close">
          <button onClick={closeCart}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div className="cart-list">
        <div className="header row">
          <div className="col-6"><h2>Product Name</h2></div>
          <div className="col-3"><h2>Quantity</h2></div>
          <div className="col-3 text-center"><h2>Amount</h2></div>
        </div>
        <div className="cart-body">
          {cartData.length === 0 ? (
            <div className="emptyCard">
              <img src={cartImg} alt="emptyaCart" className="img-fluid" />
              <h5 className="pt-4 pb-3">Your cart is empty.</h5>
            </div>
          ) : (cartData?.map((cartItem) => {
            return (
              <div className="cartItem row" key={cartItem._id}>
                <div className="col-6">
                  <div className="body">
                    <img src={`http://localhost:5000/items/${cartItem.image}`} className="img-fluid" alt="b1" />
                    <div>
                      <h5 className="card-title">{cartItem.title}</h5>
                      <button className="btn" onClick={() => handleRemove(cartItem)}><i className="fa-solid fa-trash"></i>Remove</button>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="qty">
                    <button className="btn" disabled={cartItem.quantity === 1} onClick={() => handleQtyMinus(cartItem)}>−</button>
                    <input type="email" className="form-control" value={cartItem.quantity} />
                    <button className="btn" onClick={() => handleQtyPlus(cartItem)}>+</button>
                  </div>
                </div>
                <div className="col-3">
                  <div>
                    <h3 className="card-price">$ {cartItem.price * cartItem.quantity} USD</h3>
                  </div>
                </div>
              </div>)
          }))
          }
        </div>
      </div>
      {
        cartData.length === 0 ? "" : (
          <div className="checkout">
            <div className="total">
              <h4>Total:</h4>
              <h2>$ {cartData.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)} USD</h2>
            </div >
            <Link to="/checkout" state={{ from: location }}>
              <button className="btn" onClick={closeCart}>Checkout</button>
            </Link>
          </div >
        )
      }
    </div >
  );
};

export default Cart;
