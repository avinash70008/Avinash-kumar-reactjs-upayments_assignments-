import "./ProductDetails.css"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import {useNavigate, Navigate } from "react-router"
import React from "react"

import axios from "axios"



export const ProductDetails = () => {

  const  [toogle, setToogle]= useState(true)

    const {_id} = useParams()
    const navigate = useNavigate();
    const [data ,setData] = useState([])



    
 

    useEffect(()=>{getData()},[])

    var ProductData = useSelector((store)=> store.item.item)
    
    
     const getData = ()=>{
         console.log(_id)
        let updatedData = ProductData.filter((el)=>el._id===_id )
        setData(updatedData)
     }
   

   

    // function handlewishlist(el){
      
    //  console.log("cliked me")
    //  arr.push(el);
    //  localStorage.setItem("cartData",JSON.stringify(arr));
    //  navigate("/cart")
    // }

    var arr = JSON.parse(localStorage.getItem("cartData")) || []
    const handlewishlist = (el)=>{
       
        arr.push(el);
        localStorage.setItem("cartData",JSON.stringify(arr));
      alert("product is Added in Wishlist")
  }

    return(

       <>    
            <div  className="detailsPage">
            {data.map((el)=>(
                <div key={el._id}  className="leftPart">
                    <img src={el.avatar} alt="" height="100%" width="100%"  />
                </div>

            ))}
            {data.map((el)=>(
                <div key={el._id}  className="rightPart">

                 <h3>Product Name{el.name}</h3>
                 
                 <h3>Discription: {el.description}</h3>
                 <h3>Category: {el.category}</h3>
                    <h1 id="price"> Rs . {el.price}</h1>
                 
                    <button id="wishlist" onClick={()=>handlewishlist(el)}>Add to Wishlist</button>
                

                  { 
                    
                    
                   
              }
                </div>
            ))}
            </div>
            

       </>
    )
}