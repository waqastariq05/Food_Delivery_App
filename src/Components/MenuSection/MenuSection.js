import React, { useContext, useState } from "react";
import "../MenuSection/MenuSection.css";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import SweetPagination from "sweetpagination";
import foodContext from "../../Context/foodContex";
import ProductDetail from "../ProductCard/ProductDetail";

const MenuSection = () => {
  const contex = useContext(foodContext);
  const { items, toggle, setToggle, togglePop, data, cate } = contex;

  const [price, setPrice] = useState(0.0);

  const handleInput = (e) => {
    setPrice(e.target.value);
  }

  const [currentPageData, setCurrentPageData] = useState(null);
  const [searchData, setSearchData] = useState("")

  return (
    <div className="menu">
      <div className="pad-56">
        <div className="row menuBody">
          <div className="col-md-3">
            <LeftMenu handleInput={handleInput} price={price} searchData={searchData} setSearchData={setSearchData} />
          </div>
          <div className="col-md-9">
            <RightMenu price={price} currentPageData={currentPageData} searchData={searchData} items={items} togglePop={togglePop} />
            {price > 0 || searchData !== "" ? "" : (
              <SweetPagination
                currentPageData={setCurrentPageData}
                dataPerPage={9}
                getData={items}
                navigation={true}
                getStyle={'style-custom'}
              />
            )}
          </div>
        </div>
      </div>
      {toggle && (
        <ProductDetail data={data} cate={cate} togglePop={togglePop} setToggle={setToggle} />
      )}
    </div>
  );
};

export default MenuSection;
