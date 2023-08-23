import React, { useEffect, useState, useContext } from "react";
import "../Navbar/Navbar.css";
import FoodContext from "../../Context/foodContex";
import Cart from "../Cart/Cart";
import Alert from "../Alert/Alert";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();
  const context = useContext(FoodContext);
  const { openCart, cartData } = context;
  const [stickyClass, setStickyClass] = useState("");

  // Navbar Scroll Effect
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  // Sticky Navbar Function
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setStickyClass("active") : setStickyClass("");
    }
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-md align-items-center shadow pad-56 ${stickyClass}`}
      >
        <div className="container-fluid">
          <Link className="d-flex align-items-center gap-2 text-decoration-none" to="/">
            <i className="fa-solid fa-burger"></i>
            <div className="navbar-brand">
              Food<span>Hub</span>
            </div>
          </Link>
          <div className="hide d-flex">
            <button type="button" className="navbar-toggler me-3 basket position-relative" onClick={openCart} >
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge">
                1
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-2">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link"
                  to="/about"
                  state={{ from: location }}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link"
                  to="/menu"
                  state={{ from: location }}
                >
                  Menus
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  state={{ from: location }}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="nav-end d-flex align-items-center" role="search">
              <button type="button" className="me-3 basket position-relative" onClick={openCart} >
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge">
                  {cartData.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
              <NavLink className="btn me-1" to="/menu" state={{ from: location }}>Order online</NavLink>
            </div>
          </div>
        </div>
      </nav >
      <Alert alert={props.alert} />
      <Cart />
    </div >
  );
};

export default Navbar;
