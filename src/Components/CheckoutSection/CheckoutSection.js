import React, { useContext, useState } from 'react'
import '../CheckoutSection/CheckoutSection.css'
import foodContext from '../../Context/foodContex';
import { useNavigate } from 'react-router-dom';

const CheckoutSection = (props) => {
    const navigate = useNavigate()
    const context = useContext(foodContext);
    const { cartData, setCartData } = context;

    const [billInfo, setBillInfo] = useState({ name: "", email: "", phone: "", state: "", address: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/order/addOrder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: billInfo.name,
                email: billInfo.email,
                phone: billInfo.phone,
                country: billInfo.state,
                address: billInfo.address,
                orderData: cartData,
            }),
        });
        const json = await response.json();

        setCartData([])
        setBillInfo({ name: null, email: null, phone: null, state: null, address: null })

        // Alert
        if (json.Success) {
            props.showAlert(
                "Your Order is Placed SuccessFully",
                "success",
                "fa-solid fa-circle-check text-success"
            );
        } else {
            props.showAlert(
                "Your Order not is Placed",
                "danger",
                "fa-solid fa-triangle-exclamation text-danger"
            );
        }
        navigate('/')
    }

    const change = (e) => {
        setBillInfo({ ...billInfo, [e.target.name]: e.target.value })
    }

    return (
        <div className='checkoutSection pad-56'>
            <div className="row">
                <div className="col-md-6 left">
                    <div className="checkoutHeader">
                        <h2>Billing Information</h2>
                    </div>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="name" placeholder='John Carter' name='name' value={billInfo.name} onChange={change} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder='john@gmail.com' name='email' value={billInfo.email} onChange={change} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="phone" placeholder='(921) 238 0992' name='phone' value={billInfo.phone} onChange={change} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="state" className="form-label">Country / State</label>
                                <input type="text" className="form-control" id="state" placeholder='Los Angeles' name='state' value={billInfo.state} onChange={change} required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Street Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main Street" name='address' value={billInfo.address} onChange={change} required />
                            </div>
                            <div className="col-6">
                                <button type='submit' className='btn'>Place Order</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 right">
                    <div className="checkoutHeader">
                        <h2>Your Order</h2>
                    </div>
                    <div className="checkoutBody">
                        <div className="head">
                            <h3>Product</h3>
                            <h3>Total</h3>
                        </div>
                        {cartData.map((data, index) => {
                            return (
                                <div className='data' key={index}>
                                    <h4>{data.title}</h4>
                                    <p>$ {data.price * data.quantity} USD</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="checkoutFooter">
                        <div className="head">
                            <h3>CART SUBTOTAL</h3>
                            <h3>$ {cartData.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)} USD</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSection
