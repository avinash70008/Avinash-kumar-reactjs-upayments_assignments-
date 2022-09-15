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
    // const [BackendCart ,SetBackendCart] = useState([])
//     let BackendCart = []
// const handleCart=()=>{
//     navigate("/cart")
// }


    
    // useEffect(()=>{
        
        // axios.get("https://avinashbrandhub.herokuapp.com/cart").then((data)=>{
        //     console.log("useEffect", data.data)

        //     let ans = data.data
        //     BackendCart = ans
           
        //    })





    // }, [])
    //https://avinashbrandhub.herokuapp.com

    useEffect(()=>{getData()},[])

    var ProductData = useSelector((store)=> store.item.item)
    
    
     const getData = ()=>{
         console.log(_id)
        let updatedData = ProductData.filter((el)=>el._id===_id )
        setData(updatedData)
     }
   

   

    function handlewishlist(el){
      
     console.log("cliked me")
    //     let temp =   BackendCart.filter((elem)=>{
    //            if(elem._id==el._id){
    //                return elem
             }
              
               
    //       })
    //       console.log("temo", temp)
    //     if(temp.length==0){
     

    //        axios.post("https://avinashbrandhub.herokuapp.com/cart", el).then((response)=>{
    //         console.log("backend from line 58", response.data._id)
    //         alert("Product Added in the cart")
       
        
           
    //        })   
    //          setToogle(false)
        
    //     }
    //     else{
    //         alert("Item is already in the cart!!")
    //     }
  
    // }
    

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
                   <button id="wishlist" onClick={handlewishlist}>Add to Wishlist</button>

                  { 
                    
                    
                   
              }
                </div>
            ))}
            </div>
            

       </>
    )
}