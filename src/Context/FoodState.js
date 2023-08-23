import { useState, useEffect } from "react";
import FoodContext from "./foodContex";

const FoodItemState = (props) => {
  const [cart, setCart] = useState("");
  const [cartData, setCartData] = useState([])

  const openCart = () => {
    setCart("active");
  };

  const closeCart = () => {
    setCart("");
  };

  // Food Categories ===============>
  // Fetch All Category
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    const response = await fetch(
      "http://localhost:5000/api/category/getcategory",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setCategories(json);
  };

  useEffect(() => {
    getCategory();
  }, []);

  // Food Items ===============>
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const response = await fetch(
      `http://localhost:5000/api/item/getitem/all?cat=${category}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setItems(json);
  };

  useEffect(() => {
    getItems();
  }, [category]);


  // Food Items ===============>
  const [deals, setDeals] = useState([]);

  const getDeals = async () => {
    const response = await fetch(
      "http://localhost:5000/api/deal/getDeal",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setDeals(json);
  };

  // Toggle Items Details ===============>
  const [data, setData] = useState()
  const [cate, setCate] = useState("default")
  const [toggle, setToggle] = useState(false)

  const togglePop = (e) => {
    setData(e)
    for (let i = 0; i < categories.length; i++) {
      if (categories[i]._id === e.categories) {
        setCate(categories[i].name)
      }
    }
    toggle ? setToggle(false) : setToggle(true)
  }

  return (
    <FoodContext.Provider
      value={{
        // Cart
        cart,
        cartData,
        setCartData,
        openCart,
        closeCart,
        // Categories
        categories,
        // Set Filter Category
        category,
        setCategory,
        // Items
        items,
        deals,
        getDeals,
        toggle,
        setToggle,
        togglePop,
        data,
        cate
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodItemState;
