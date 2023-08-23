import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminNavbar from '../../Components/Navbar/AdminNavbar';
import Category from './Category';
import Item from './Item';
import Deal from './Deal';
import Contact from './Contact';
import Reservation from './Reservation';
import Order from './Order';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("Token")) {
            navigate("/admin/")
        }
    });

    // Logout Function
    const handleLogout = () => {
        localStorage.removeItem("Token");
        navigate("/admin/");
    };

    return (
        <div className='dahboard'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminNavbar />
                    </div>
                    <div className="col-md-9">
                        <Routes>
                            <Route path="/category" element={<Category />} />
                            <Route path="/item" element={<Item />} />
                            <Route path="/deal" element={<Deal />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/reservation" element={<Reservation />} />
                            <Route path="/order" element={<Order />} />
                        </Routes>
                    </div>
                </div>
                <button className='btn logout-btn' onClick={handleLogout}><i className="fa-solid fa-right-to-bracket me-2"></i>Logout</button>
            </div>
        </div>
    );
}

export default Dashboard
