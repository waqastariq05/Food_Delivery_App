import React, { useEffect, useState } from 'react'
import ViewOrder from './ViewOrder';

const Order = () => {
    const [orders, setOrders] = useState([])

    const getOrders = async () => {
        const response = await fetch(
            "http://localhost:5000/api/order/getOrder",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const json = await response.json();
        setOrders(json);
    };

    useEffect(() => {
        getOrders()
    }, [])

    const handleDlt = async (id) => {
        const response = await fetch(`http://localhost:5000/api/order/deleteOrder/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        window.location.reload();

        // Alert
        if (json.Success) {
            alert("Order Delivered SuccessFully",);
        } else {
            alert("Order Not Delivered SuccessFully",);
        }
    }

    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState([])
    const handleToggle = (e) => {
        setData(e)
        toggle ? setToggle(false) : setToggle(true)
    }

    return (
        <div className='orders py-3 px-4'>
            <div className="top text-start">
                <h2 className='mb-3 text-uppercase'>Orders</h2>
            </div>
            <div className="adminBody table-responsive">
                <table className="table table-dark table-hover table-bordered text-center align-middle">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">State</th>
                            <th scope="col">Address</th>
                            <th scope="col">Order Data</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {orders && orders.slice(0).reverse().map((order, index) => {
                            var timestamp = Date.parse(order.date);
                            let newtime = timestamp;
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.country}</td>
                                    <td>{order.address.slice(0, 10)}...</td>
                                    <td>{order.orderData.length} item</td>
                                    <td>{new Date(Number(newtime.toString())).toLocaleDateString(
                                        undefined,
                                        {
                                            year: 'numeric',
                                            month: 'numeric',
                                            day: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric',
                                        })
                                    }</td>
                                    <td>
                                        <button className='btn py-1 px-2 rounded-1 me-2' onClick={() => handleToggle(order)}><i className="fa-solid fa-eye"></i></button>
                                        <button className='btn py-1 px-2 rounded-1' onClick={() => handleDlt(order._id)}><i className="fa-solid fa-square-check"></i></button>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            {toggle && (
                <ViewOrder data={data} handleToggle={handleToggle} />
            )}
        </div>
    )
}

export default Order
