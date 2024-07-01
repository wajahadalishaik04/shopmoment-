import React from "react";
import { FiYoutube } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";











const Footer = () =>
    {
        return (
            <>
            <div className="w-full  bg-gray-800  mt-12 p-7 flex  flex-wrap justify-between items-center">
               <div className="text-slate-200 px-4 ">
                <h3 className="text-5xl font-medium my-4 ">Creativity Unlocked</h3>
                <p className="text-lg text-gray-400 mb-4">Fuel your creative potential by becoming a part of our community <br></br> and enjoy savings on your first purchase</p>
                <div className=""><input className=" pr-32  bg-slate-700 rounded-3xl mr-1.5 mb-4  outline-none border-2 border-solid border-blue-500     p-5 " type="email" placeholder="Enter Email:"/>
                   <button className="p-4 border-2 border-solid border-slate-500 hover:bg-slate-500 rounded-3xl">SIGN UP</button>
                </div>
                <div>
                   <ul className=" text-xl   flex   gap-3 cursor-pointer items-center ">
                    <li className="hover:bg-white hover:text-gray-950 p-1 hover:rounded-full"><FiYoutube/></li>
                    <li className="hover:bg-white hover:text-gray-950 p-1 hover:rounded-full"><RiTwitterXFill/></li>
                    <li className="hover:bg-white hover:text-gray-950 p-1 hover:rounded-full"><FaTiktok /></li>
                    <li className="hover:bg-white hover:text-gray-950 p-1 hover:rounded-full"><FaInstagram/></li>
                    <li className=" text-[1.5vw] flex items-center hover:bg-white p-1 hover:rounded-full hover:text-black justify-center"><CgMail/>  <span className="text-lg">Email Us</span> </li>
                   </ul> 
                  </div>
               </div>
               <div className="font-serif text-gray-400 text-lg   ">
                <h3 className="text-4xl text-slate-100 mb-4 ">Get Support</h3>
                <ul className="px-1 p-1 ">
                    <li className= "hover:text-gray-100   hover:border-b-2 w-[11vw]   ">Contact Us</li>
                    <li className="hover:text-gray-100  block hover:border-b-2 w-[11vw]">getting Started</li>
                    <li className="hover:text-gray-100  block hover:border-b-2 w-[11vw]">Gear Guides </li>
                    <li className="hover:text-gray-100  block hover:border-b-2 w-[15vw]">Returns & Exchanges</li>
                    <li className="hover:text-gray-100  block hover:border-b-2 w-[11vw]">Returns Portal</li>
                    <li className="hover:text-gray-100  block hover:border-b-2 w-[11vw]">Accessibility</li>
                </ul>
               </div>
               <div className="font-serif text-gray-400 text-lg   ">
                <h3 className="text-4xl text-slate-100 mb-4 ">About Moment</h3>
                <ul className="px-1 p-1 ">
                    <li className= "hover:text-gray-100   hover:border-b-2    ">Why Shop Moment</li>
                    <li className="hover:text-gray-100  block hover:border-b-2 ">The Creator Mission</li>
                    <li className="hover:text-gray-100  block hover:border-b-2 ">Work at Moment </li>
                    <li className="hover:text-gray-100  block hover:border-b-2 ">Returns & Exchanges</li>
                    <li className="hover:text-gray-100  block hover:border-b-2 ">Moment Merch</li>
                    <li className="hover:text-gray-100  block hover:border-b-2 ">Download Pro Camera app</li>
                </ul>
               </div>
               <div className="font-serif text-gray-400 text-lg   ">
                <h3 className="text-4xl text-slate-100 mb-4 ">Get Involved</h3>
                <ul className="pb-14 p-1 ">
                    <li className= "  hover:text-gray-100   hover:border-b-2    ">Become a Moment Member</li>
                    <li className="  hover:text-gray-100  block hover:border-b-2 ">Moment super Affiliate</li>
                    <li className="  hover:text-gray-100  block hover:border-b-2 ">Sell at Moment</li>
                    <li className="  hover:text-gray-100  block hover:border-b-2 ">Become a Gear Guide</li>
                    
                </ul>
               </div>
            <div className="w-full border-t-gray-500 text-gray-400 font-sans mt-3 border-t-2 ">
                <ul className="flex justify-between items-center p-1 mt-2  border-t-gray-400">
                  <div className="flex gap-2"><li>Terms Of Service</li>
                    <li>privacy Policy</li>
                    <li>Manage Cookies </li></div>
                   <div className="flex gap-2"><li>3851 1st Ave S, Suite</li>
                   <li>Seattle, WA 98134</li></div>   
                </ul>
            </div>
            </div>
            <div className="w-full   text-slate-400 bg-black p-4 ">
                <ul className="flex justify-between items-center">
                <div className="flex gap-3">
                <li>All rights reserved </li>
                <li> &#169;	 2024 Moment, Inc.</li>
                </div>
                
                <ul className="flex w-72 gap-2">
                    <li className=""><img src="https://www.shopmoment.com/images/pay/visa.svg" alt="" /></li>
                    <li><img src="https://www.shopmoment.com/images/pay/master-card.svg" alt="" /></li>
                    <li><img src="https://www.shopmoment.com/images/pay/amex.svg" alt="" /></li>
                    <li><img src="https://www.shopmoment.com/images/pay/discover.svg" alt="" /></li>
                    <li><img src="https://www.shopmoment.com/images/pay/diners-club.svg" alt="" /></li>
                    <li><img src="https://www.shopmoment.com/images/pay/jcb.svg" alt="" /></li>
                </ul>
                </ul>
            </div>
            </>
        )
    }
    export default Footer;