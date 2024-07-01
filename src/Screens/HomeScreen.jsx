import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import HeroImage from "../Components/HeroImage";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import Footer from "../Components/Footer"
const HomeScreen = () =>
    {
        const [data,setData] = useState([]);
        const productCardApiData =async () =>
         {
            const data = await axios.get("https://dummyjson.com/products");
            console.log(data.data.products);
            setData(data.data.products);
         }  
         useEffect(()=>{
             productCardApiData();
         })     

    //    rendering the productcard data by through props
  
        const heroimagedata = {
            image: "jobymike.webp",
            title: `Capture More,Carry Less`, 
            description: "Create stunning videos directly on your phone. Shop the gear, kits, and bundles needed to level up your mobile filmmaking.",
            btn: "SHOP MOBILE"
          }
        const secondherodata = 
        {
            image:"momentinvitationheroimage.webp",
            title:"MIFF 2024 Is Here",
            description:"Finally — the world's premiere mobile film festival (MIFF) is back for its 7th year. This year, we're raising the stakes with over $100,000 in cash and gear prizes, waiting for bold creators ready to challenge the boundaries of what's possible with a smartphone.",
            btn:"SIGN UP"
        }
        const thirdHeroImage = 
        {
            image:"journeyfriends.webp",
            title:"Join over 100k+ Creatives!",
            description:"Members get up to 10% back, special savings, priority service & more.Joining is free (and easy)",
            btn:"BECOME A MEMBER"
        }
    

       
        return(
            <>
            <NavBar/>
            {/* main screen conatiner */}
            <div className="w-full h-screen font-serif">
             <HeroImage image={heroimagedata.image} title={heroimagedata.title} description={heroimagedata.description} btn={heroimagedata.btn}/>
             {/* best seller bar */}
             <div className="p-7 mt-4 text-4xl flex justify-between font-serif font-medium ">
                Best Sellers
                <button className="text-right text-xl text-white p-2 rounded-full bg-slate-700 hover:bg-slate-800">Shop All</button>
                </div>
                {/* product cards */}
                <div className=" w-full flex gap-2 flex-wrap justify-evenly    px-5 " >
                   <div className="w-[90%] flex gap-2 flex-wrap">
                   
                   {data.slice(0,8).map((e)=><ProductCard thumbnail={e.thumbnail} title={e.title} stock={e.stock} description={e.description}price={e.price}btn={e.btn}  />)}

                   
                   </div>
                </div>
                <HeroImage image={secondherodata.image} title={secondherodata.title} description={secondherodata.description} btn={secondherodata.btn}/>
                <div className="my-8 px-10 font-serif ">
                    <h2 className="text-4xl font-semibold p-4">Your Summer Mobile Filmmaking Kits </h2>
                    <p className="px-4 font-medium text-xl">Our mobile bundles cater to all — from beginners to pros. Capture stunning footage no matter where you go.</p>
                </div>
                {/* product cards */}
                <div className=" w-full flex justify-evenly flex-wrap     px-5 " >
                    {data.slice(8,16).map((e)=><ProductCard thumbnail={e.thumbnail} title={e.title} stock={e.stock} description={e.description}price={e.price}btn={e.btn}  />)}
                </div>
                <div className="font-serif px-10 my-8 ">
                    <h2 className="font-medium text-4xl">Need some tips? </h2>
                    <p className=" font-light text-lg">earn from our community's top creatives. Our courses cover shooting, editing, gear selection, pre-production, and more.</p>
                </div>
                {/* product cards */}
                <div className=" w-full flex justify-evenly flex-wrap     px-5 " >
                    {data.slice(16,20).map((e)=><ProductCard thumbnail={e.thumbnail} title={e.title} description={e.description} stock={e.stock} price={e.price}btn={e.btn}/>)}
                </div>
                {/* banner:Get Early Access to fresh Deals  */}
                <div className=" p-16 my-9  pl-64 bg-slate-700 text-slate-100">
                    <h2 className=" text-5xl mb-3 font-medium text-white ">Get Early Access to Fresh Deals</h2>
                    <p className="text-xl font-thin mb-8   text-slate-200 ">Sign up for our emails and be the first to know about exclusive deals, limited<br></br>   time offers, and big savings as soon as they drop.</p>
                   <div className=""><input className=" pr-32  bg-slate-700 rounded-3xl mr-1.5  outline-none border-2 border-solid border-blue-500     p-5 " type="email" placeholder="Enter Email:"/>
                   <button className="p-4 border-2 border-solid border-slate-500 hover:bg-slate-500 rounded-3xl">SIGN UP</button>
                   </div>
                </div>
                <div className="top-" ><HeroImage image={thirdHeroImage.image} title={thirdHeroImage.title}description={thirdHeroImage.description}btn={thirdHeroImage.btn} /></div>
                <Footer/>
            </div>
            </>
        )
    }
    export default HomeScreen;
