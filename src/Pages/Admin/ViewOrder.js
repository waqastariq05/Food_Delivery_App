import React from 'react'

const ViewOrder = (props) => {
    const { data, handleToggle } = props
    return (
        <>
            <div className='viewOrder'>
                <div className='close' onClick={handleToggle}>
                    <i className="fa-solid fa-circle-xmark"></i>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="head">
                            <h2>User Detail</h2>
                        </div>
                        <div className="orderBody">
                            <ul>
                                <li>{data.name}</li>
                                <li>{data.email}</li>
                                <li>{data.phone}</li>
                                <li>{data.country}</li>
                                <li>{data.address}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="head">
                            <h2>Order Detail</h2>
                        </div>
                        <div className="orderBody ">
                            <div className="row data">
                                {data && data.orderData.map((d, index) => {
                                    return (
                                        <div className='col-6'>
                                            <h2>Item: {index + 1}</h2>
                                            <ul>
                                                <li>Name: {d.title}</li>
                                                <li>Quantity: {d.quantity}</li>
                                                <li>Price: $ {d.price * d.quantity} USD</li>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="orderFooter">
                            <h3>Total</h3>
                            <h3>$ {data.orderData.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)} USD</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay" onClick={handleToggle}></div>
        </>
    )
}

export default ViewOrder
