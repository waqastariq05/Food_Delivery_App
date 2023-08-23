import React from 'react'
import '../OfferSection/OfferSection.css'
import offer from '../../images/offer.jpeg'
import { Link, useLocation } from 'react-router-dom'

const OfferSection = () => {
    const location = useLocation();
    return (
        <div className='offerSection'>
            <div className="offerBox">
                <div className="offerLeft">
                    <h3></h3>
                    <h2>Taste the most delicious burger in Los Angeles, CA</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.</p>
                    <div className="offerBtn">
                        <Link className="btn" to="/menu" state={{ from: location }}>Order online</Link>
                        <a href="#reservation" className='btn'>Book a table</a>
                    </div>
                </div>
                <div className="offerRight">
                    <img src={offer} alt="offer" className='img-fluid' />
                </div>
            </div>
        </div>
    )
}

export default OfferSection
