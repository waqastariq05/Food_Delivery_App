import React, { useContext, useEffect } from "react";
import "../DealSection/DealSection.css";
import Title from "../Title/Title";
import foodContext from "../../Context/foodContex";

const DealSection = () => {
  const contex = useContext(foodContext);
  const { deals, getDeals, openCart, setCartData, cartData } = contex;

  useEffect(() => {
    getDeals();
  }, [])

  const addItem = (data, qty) => {
    const existingCartItem = cartData.find((item) => item._id === data._id);

    if (existingCartItem) {
      const updatedCart = cartData.map((item) =>
        item._id === data._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartData(updatedCart);
    } else {
      setCartData([...cartData, { ...data, quantity: qty }]);
    }
    openCart("Active")
  }

  return (
    <div className="deal">
      <div className="pad-56">
        <Title h6="SUPER DELICIOUS" h2="Super Delicious Deal" />
        <div className="body">
          <div className="row">
            {deals.length === 0 ? (<h4>No Deals Upload Yet..</h4>) : deals.slice(0, 6).map((deal, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card">
                    <div className="card-img">
                      <img src={`http://localhost:5000/items/${deal.image}`} className="card-img-top" alt="d1" />
                    </div>
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h5 className="card-title">{deal.title}</h5>
                        <h3 className="card-price">$ {deal.price} USD</h3>
                      </div>
                      <p className="card-text">{deal.description}</p>
                      <button className="btn" onClick={() => addItem(deal, 1)}>Add to cart</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealSection;
