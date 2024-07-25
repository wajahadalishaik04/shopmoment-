import React, { useEffect } from "react";   
import PProductsCard from "../Components/PProductsCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Components/NavBar";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const {products} =useSelector((e)=>e.ProductsCardReducer);
  
  const callingApiProduct=async()=>
  {
    const {data} = await axios.get("https://dummyjson.com/products");
    dispatch({type:"addProducts", payload:data.products});
    console.log(data)
  }
  useEffect(()=>{
    if(!products.length)
    {

      callingApiProduct();
    }
  },[])

  return (
    <>
  <NavBar/>
  <div className="flex flex-wrap mt-5 gap-2 px-5">
   {products.map((e)=><PProductsCard key={e.id} thumbnail={e.thumbnail} title={e.title}stock={e.stock}description={e.description}price={e.price}/>)}
    </div>
    <div>ProductScreen</div>
    

    </>
    
  )
}

export default ProductScreen;