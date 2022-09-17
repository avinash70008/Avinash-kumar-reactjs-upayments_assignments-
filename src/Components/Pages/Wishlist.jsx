import { useState } from "react"
import React from "react";
import "./Wishlist.css"

export const Wishlist = ()=>{
              
    const [count,setCount] = useState(1)
    const [carttotal,setCarttotal] = useState(0);
    const [flag,setFlag] = useState(false);
  

    let cartData = JSON.parse(localStorage.getItem("cartData"))

    

    return(

        <>
        <h1 id="mycart">MY WishList Products</h1>
        <div >
         {cartData.map((el,index)=>(

            <div key={index} className="flexdiv">
              <div className="imgdiv"> <img  src={el.avatar} alt="" />
              </div>

                
                      <div className="Details">
                    <p>Name: {el.name}</p>
                    <p>Discription: {el.description}</p>
                    <p>Price: {el.price}</p>
                    <p>Category: {el.category}</p>
                   
                    <button onClick={()=>{
                      
                      cartData.splice(index,1);
                      localStorage.setItem("cartData",JSON.stringify(cartData))
                      setFlag(!flag)
                          
                    }}>Remove</button>
                       </div>
            </div>
            
         ))}
        </div>

        {/* <button onClick={()=> navigate("/payment")} id="payBtn">Proceed to Pay</button> */}
        </>
    )
}
