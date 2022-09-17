import React from 'react'
import "./Navbar.css"

import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Products from '../Products/Products';
import  { Additems } from '../Pages/Additems';


import { LoginApp } from '../Login/Login';
import { Wishlist } from '../Pages/Wishlist';


const Navbar = () => {
  return (
    <div id='nav'>
<ul>
    <Link to= "/" path = {<Home />}><li id='hme'>Home</li></Link>

    <Link to="/product" path= {<Products />}><li id='prod'>Products</li></Link>

    <Link to="/additems" path = {<Additems />}><li id='abt'>Add Products</li></Link>

    <Link to="/wishlist" path = {<Wishlist />}><li id='car'>Wishlist</li></Link>

   

    <Link to= "/login" path = {<LoginApp />}><li id='cntct'>Register</li></Link>
</ul>





    </div>
  )
}

export default Navbar