import React, { useState } from 'react'
import '../Reservation/Reservation.css'

const Reservation = (props) => {
    const [reserve, setReserve] = useState({ name: "", email: "", phone: "", location: "", date: "", msg: "" })

    const handleReserve = async (e) => {
        e.preventDefault();
        console.log(reserve.date)
        const unixTimestamp = Date.parse(reserve.date) / 1000;
        console.log(unixTimestamp)
        const response = await fetch("http://localhost:5000/api/reservation/addReservation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: reserve.name,
                email: reserve.email,
                phone: reserve.phone,
                location: reserve.location,
                date: unixTimestamp,
                message: reserve.msg,
            }),
        });
        const json = await response.json();
        setReserve({ name: null, email: null, phone: null, location: null, date: null, msg: null })

        // Alert
        if (json.Success) {
            props.showAlert(
                "Your Table Have Book Successfully",
                "success",
                "fa-solid fa-circle-check text-success"
            );
        } else {
            props.showAlert(
                "Your Table Have not Book Successfully",
                "danger",
                "fa-solid fa-triangle-exclamation text-danger"
            );
        }
    }

    const change = (e) => {
        setReserve({ ...reserve, [e.target.name]: e.target.value })
    }

    return (
        <div className='reservation' id='reservation'>
            <div className="reservationBox">
                <div className="reservationLeft">
                    <div className="text">
                        <h2>Book your table now</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.</p>
                    </div>
                    <div className="social">
                        <div className="iconBox">
                            <div className="icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="body">
                                <h3>923 W.Marshall Lane Marshalltown, IA 50186, Los Angeles</h3>
                            </div>
                        </div>
                        <div className="iconBox">
                            <div className="icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="body">
                                <h3>(414) 857 - 0107</h3>
                            </div>
                        </div>
                        <div className="iconBox">
                            <div className="icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="body">
                                <h3>foodhub@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reservationRight">
                </div>
                <div className="box shadow">
                    <form className="row g-3" onSubmit={handleReserve}>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder='John Carter' name='name' value={reserve.name} onChange={change} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder='example@gmail.com' name='email' value={reserve.email} onChange={change} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone" placeholder='(123) 456 - 789' name='phone' value={reserve.phone} onChange={change} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input type="text" className="form-control" id="location" placeholder='Ex. Los Angeles' name='location' value={reserve.location} onChange={change} required />
                        </div>
                        <div className="col-6">
                            <label htmlFor="schedule" className="form-label">Schedule</label>
                            <input type="datetime-local" className="form-control" id="schedule" name='date' value={reserve.date} onChange={change} required />
                        </div>
                        <div className="col-12">
                            <label htmlFor="note" className="form-label">Add a note</label>
                            <textarea className="form-control" id="note" rows="5" placeholder='Do you have any note for us?' name='msg' value={reserve.msg} onChange={change} required />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Book a table</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Reservation
