import React from 'react'
import "../Navbar/Navbar.css";
import { NavLink } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <div className='adminNavbar shadow'>
            <div>
                <a className="d-flex align-items-center gap-2 text-decoration-none" to="/">
                    <i className="fa-solid fa-burger"></i>
                    <div className="navbar-brand">
                        Food<span>Hub</span>
                    </div>
                </a>
            </div>
            <nav className="nav flex-column">
                <NavLink className="nav-link" to="/admin/dashboard/category">Category Master</NavLink>
                <NavLink className="nav-link" to="/admin/dashboard/item">Item Master</NavLink>
                <NavLink className="nav-link" to="/admin/dashboard/deal">Deals Master</NavLink>
                <NavLink className="nav-link" to="/admin/dashboard/contact">Contact Master</NavLink>
                <NavLink className="nav-link" to="/admin/dashboard/reservation">Reservation Master</NavLink>
                <NavLink className="nav-link" to="/admin/dashboard/order">Order Master</NavLink>
            </nav>
            <div>
                <p>Copyright © 2023, FoodHub.</p>
            </div>
        </div>
    )
}

export default AdminNavbar
