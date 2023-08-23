import React from "react";
import "../ProductCard/ProductCard.css";

const ProductCard = (props) => {
  const { img, title, desc, price } = props;

  return (
    <>
      <div className="product">
        <div className="product-card">
          <div className="product-card-img">
            <img src={`http://localhost:5000/items/${img}`} className="card-img-top" alt="..." />
          </div>
          <div className="card-price">
            <h5>$ {price} USD</h5>
          </div>
          <div className="product-card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {(desc === undefined ? "" : desc)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
