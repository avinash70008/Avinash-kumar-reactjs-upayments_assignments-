import React from 'react'
import "./Navbar.css"

import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Products from '../Products/Products';
import About from '../Pages/About';
import { Carriers } from '../Pages/Carriers';
import Contact from '../Pages/Contact';
import { LoginApp } from '../Login/Login';

const Navbar = () => {
  return (
    <div id='nav'>
<ul>
    <Link to= "/" path = {<Home />}><li id='hme'>Home</li></Link>

    <Link to="/product" path= {<Products />}><li id='prod'>Products</li></Link>

    <Link to="/about" path = {<About />}><li id='abt'>About</li></Link>

    <Link to="/carrier" path = {<Carriers />}><li id='car'>Carrier</li></Link>

    <Link to= "/contact" path = {<Contact />}><li id='cntct'>Contact us</li></Link>

    <Link to= "/login" path = {<LoginApp />}><li id='cntct'>Register</li></Link>
</ul>





    </div>
  )
}

export default Navbar