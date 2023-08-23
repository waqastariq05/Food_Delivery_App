import React, { useContext } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import MainBanner from '../Components/MainBanner/MainBanner'
import CheckoutSection from '../Components/CheckoutSection/CheckoutSection'
import foodContext from '../Context/foodContex'
import { useNavigate } from 'react-router-dom'

const Checkout = (props) => {
    const navigate = useNavigate()
    const context = useContext(foodContext);
    const { cartData } = context;

    if (cartData.length === 0) {
        navigate("/")
    }
    else {
        return (
            <div>
                <Navbar alert={props.alert} />
                <MainBanner title="Checkout" />
                <CheckoutSection showAlert={props.showAlert} />
                <Footer />
            </div>
        )
    }
}

export default Checkout
