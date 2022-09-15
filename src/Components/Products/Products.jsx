import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import "./Product.css"
import { FilterPage } from "../FilterPage";
import SelectLabels from "../SelectTag";
import { useNavigate } from "react-router";
import { getProductData } from "../../Redux/Products/action";
import { store } from "../../store";




 const Product = () => {
   

    const [category,setcategory] = useState("");
  
    const [sort,setSort]   = useState("");



    const navigate = useNavigate()

    const dispatch = useDispatch();
    useEffect(()=>{getData()},[]);
    
    var ProductData = useSelector((store)=> store.item.item)
    console.log("comp",ProductData)
    const getData = () => {
        
        dispatch(getProductData())
    }


 

    const settingcategory = (value)=>{
        setcategory(value)
   }
 
   

   

     const SortApply = (value)=>{
         setSort(value)
    }


     ProductData = ProductData.filter((el)=>{

        if(category === ""){
            return ProductData
        }
        else if(el.category === category){
            return el.category === category
        }
    
  }).sort((a,b) => {

        if(sort === ""){
            return ProductData
        }
        else if(sort === "asc"){
            return a.price - b.price
        }
        else if(sort === "desc"){
            return b.price - a.price
        }
    })



    return(
        <>
        
        <div className="selectTag">
        <h1>Upayments Ecommerce</h1>
            <SelectLabels SortApply={SortApply}/>
        </div>
        <div className="mainDiv">
        <div className="leftDiv">
        <FilterPage settingcategory={settingcategory} />
        </div>
        <div className="rightDiv">
            
            {ProductData.map((el)=>(
                <div onClick={()=>  navigate(`/productdetails/${el._id}`)} key={el._id}>
                    <img style={{
                        height:"240px",
                        padding:"10px"
                    }} src={el.avatar}/>
                    <p>{el.name}</p>
                    <p>{el.category}</p>
                   
                    <p>{"Rs. "+el.price}</p>
                </div>
            ))}
        </div>
        </div>
        </>
    )
    
}

export default Product