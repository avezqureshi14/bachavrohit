import React from 'react'
import Logo from '../images/logo.jpg'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav id="navigation">
                <div className="logo">
                    <img src={Logo} alt="MyBusBooking.com" />
                </div>
                <ul>
                <li className="navi"><NavLink to="/">Home</NavLink></li>
                    <li className="navi"><a href="../Bus.html">Buses</a></li>
                    <li className="navi"><NavLink to="/contact">Contact Us</NavLink></li>
                    <li className="navi"><a href="../Registration.html">Register Now</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar