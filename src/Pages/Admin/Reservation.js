import React, { useEffect, useState } from 'react'

const Reservation = () => {
    const [reservation, setReservation] = useState([])

    const getReservation = async () => {
        const response = await fetch(
            "http://localhost:5000/api/reservation/getReservation",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const json = await response.json();
        setReservation(json);
    };

    useEffect(() => {
        getReservation()
    }, [])

    const handleDlt = async (id) => {
        const response = await fetch(`http://localhost:5000/api/reservation/deleteReservation/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        window.location.reload();

        // Alert
        if (json.Success) {
            alert("Reservation Delted SuccessFully",);
        } else {
            alert("Reservation Not Delted SuccessFully",);
        }
    }

    return (
        <div className='reserve py-3 px-4'>
            <div className="top text-start">
                <h2 className='mb-3 text-uppercase'>Reservation</h2>
            </div>
            <div className="adminBody table-responsive">
                <table className="table table-dark table-hover table-bordered text-center align-middle">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Location</th>
                            <th scope="col">Schedule</th>
                            <th scope="col">Message</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {reservation && reservation.slice(0).reverse().map((res, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{res.name}</td>
                                    <td>{res.email}</td>
                                    <td>{res.phone}</td>
                                    <td>{res.location}</td>
                                    <td>{new Date(Number(res.date.toString() + '000')).toLocaleDateString(
                                        undefined,
                                        {
                                            year: 'numeric',
                                            month: 'numeric',
                                            day: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric',
                                        })
                                    }</td>
                                    <td>{res.message}</td>
                                    <td>
                                        <button className='btn py-1 px-2 rounded-1' onClick={() => handleDlt(res._id)}><i className="fa-solid fa-trash"></i></button>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Reservation
