import React from 'react';
import {Routes , Route} from "react-router"
import Home from '../Home/Home';
import { LoginApp } from '../Login/Login';
import About from "../Pages/About"
import { Carriers } from "../Pages/Carriers"
import Contact from "../Pages/Contact"
import Product from '../Products/Products';
import { ProductDetails } from '../ProductsDetails/ProductDetails';







export const AllRoutes =() => {

    return(
        <Routes>

            <Route path ="/" element ={<Home />}/>
           <Route path ="/about" element ={<About />}/>
            <Route path ="/contact" element ={<Contact />}/>
            <Route path ="/carrier" element ={<Carriers />}/>
            <Route path ="/product" element ={<Product />}/>
            <Route path ="/login" element ={<LoginApp />}/>
           

            <Route path ="/productdetails/:_id" element ={<ProductDetails/>}/>

            
          
           
           
        </Routes>
    )
}