import React, { useContext, useState } from 'react'
import '../ProductCard/ProductCard.css'
import foodContext from "../../Context/foodContex";

const ProductDetail = (props) => {
    const context = useContext(foodContext);
    const { openCart, setCartData, cartData } = context;
    const { data, cate, togglePop, setToggle } = props;

    const [quantity, setQuantity] = useState(1);

    const addItem = (data, qty) => {
        const existingCartItem = cartData.find((item) => item._id === data._id);

        if (existingCartItem) {
            const updatedCart = cartData.map((item) =>
                item._id === data._id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartData(updatedCart);
        } else {
            setCartData([...cartData, { ...data, quantity: qty }]);
        }
        setToggle(false)
        openCart("Active")
    }

    return (
        <>
            <div className="productDetail shadow">
                <div className='close' onClick={togglePop}>
                    <i className="fa-solid fa-circle-xmark"></i>
                </div>
                <div className='row align-items-center'>
                    <div className="col-md-6 left">
                        <img src={`http://localhost:5000/items/${data.image}`} alt="" className='img-fluid' />
                    </div>
                    <div className="col-md-6 right">
                        <h2 className='title'>{data.title}</h2>
                        <h3 className='price'>$ {data.price} USD</h3>
                        <div className='body'>
                            <h2>Overview</h2>
                            <p className='text'>{data.description}</p>
                        </div>
                        <h4 className='cate'>Food Type: <span>{cate}</span></h4>
                        <div className="row align-items-center box">
                            <div className="col-5 qty">
                                <button className="btn" disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>−</button>
                                <input type="email" className="form-control" value={quantity} />
                                <button className="btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <div className="col-7">
                                <button className="btn" onClick={() => addItem(data, parseInt(quantity))}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="overlay" onClick={togglePop}></div>
        </>
    )
}

export default ProductDetail
