import React, { useContext } from "react";
import "../MainSection/MainSection.css";
import FoodContext from "../../Context/foodContex";
import Title from "../Title/Title";
import ProductCard from "../ProductCard/ProductCard";
import ProductDetail from "../ProductCard/ProductDetail";

const MainSection = () => {
  const contex = useContext(FoodContext);
  const { items, toggle, setToggle, togglePop, data, cate } = contex;

  return (
    <div className="topFood">
      <div className="pad-56">
        <Title h6="Quick Pick" h2="Popular Foods" />
        <div className="body">
          <div className="row">
            {items &&
              items.slice(0, 8).map((item, index) => {
                return (
                  <div className="col-md-3" key={index} onClick={() => togglePop(item)}>
                    <ProductCard
                      img={item.image}
                      title={item.title}
                      desc={item.description}
                      price={item.price}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {toggle && (
        <ProductDetail data={data} cate={cate} togglePop={togglePop} setToggle={setToggle} />
      )}
    </div >
  );
};

export default MainSection;
