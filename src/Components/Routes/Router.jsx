import React from 'react';
import {Routes , Route} from "react-router"
import Home from '../Home/Home';
import { LoginApp } from '../Login/Login';

import CreateProduct from '../Pages/CreateProducts';



import { Wishlist } from '../Pages/Wishlist';



import Product from '../Products/Products';
import { ProductDetails } from '../ProductsDetails/ProductDetails';







export const AllRoutes =() => {

    return(
        <Routes>

            <Route path ="/" element ={<Home />}/>
           <Route path ="/additem" element ={<CreateProduct />}/>
           
            <Route path ="/wishlist" element ={<Wishlist />}/>
            <Route path ="/product" element ={<Product />}/>
            <Route path ="/login" element ={<LoginApp />}/>
           

            <Route path ="/productdetails/:_id" element ={<ProductDetails/>}/>

            
          
           
           
        </Routes>
    )
}