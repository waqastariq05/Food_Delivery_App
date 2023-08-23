import React, { useContext, useEffect, useState } from "react";
import FoodContext from "../../Context/foodContex";

const LeftMenu = (props) => {
  const contex = useContext(FoodContext);
  const { categories, setCategory, category, items } = contex;

  const [maxPrice, setMaxPrice] = useState(0);
  let formData = [];
  useEffect(() => {
    for (let i = 0; i < items.length; i++) {
      formData.push(items[i].price)
    }
    setMaxPrice(Math.max(parseFloat(formData)));
  }, [items])

  return (
    <>
      <div className="searchBox input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search products.."
          value={props.searchData}
          onChange={(e) => props.setSearchData(e.target.value)}
        />
      </div>
      <div className="categories leftBox">
        <div className="leftBoxTitle">
          <h2>Categories</h2>
        </div>
        <div className="leftBoxCate">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="cate"
              value=""
              id="all"
              onChange={(e) => setCategory(e.target.value)}
              defaultChecked
            />
            <label
              className="form-check-label active"
              htmlFor="all"
            >
              All
            </label>
          </div>
          {categories && categories.map((cate) => {
            return (
              <div className="form-check" key={cate._id}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="cate"
                  value={cate._id}
                  id={cate._id}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label
                  className={`form-check-label ${category === cate._id ? "active" : ""
                    }`}
                  htmlFor={cate._id}
                >
                  {cate.name}
                </label>
              </div>
            );
          })}
        </div>
      </div >
      <div className="leftBoxPrice leftBox">
        <div className="leftBoxTitle">
          <h2>FILTER BY PRICE</h2>
        </div>
        <div>
          <p>Price: <span>$ {props.price} USD</span></p>
          <input type="range" onChange={props.handleInput} min="0" max={maxPrice} />
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
