import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaHandSparkles } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const NavBar = () => {
  const {count} = useSelector((e)=>e.productReducer);
  const {bannerCount} = useSelector((e)=>e.heroBannerCount)
  
  return (
    <>
      <div className="w-full p-3 px-4 border-b-2 bg-white shadow-md   border-slate-200 text-base flex items-center justify-between flex-wrap   font-serif ">
        <div className="flex items-center justify-center">
          <span className="md:hidden mr-4">
            <RxHamburgerMenu fontSize={40} />
          </span>
          <img
            className="w-12 h-12 "
            src="moment-seeklogo.svg"
            alt="moment-logo"
          />
        </div>
        <div className="list-none sm:hidden md:flex p-2  flex items-center font-medium justify-between gap-6">
          <Link className="hover:bg-slate-200 hover:rounded-full" to='/Users'>Users</Link>
          <Link className="hover:bg-slate-200 hover:rounded-full" to="/products"> Products</Link>
          <Link className="hover:bg-slate-200 hover:rounded-full" to="/courses">Courses</Link>
          <Link className="hover:bg-slate-200 hover:rounded-full" to="/Luts & Presets">Luts & Presets</Link>
          <Link className="hover:bg-slate-200 hover:rounded-full" to="/Editorial">Editorial</Link>
        </div>
        <div className="flex items-center justify-between p-2 text-2xl gap-5">
          <CiSearch />
          <FaHandSparkles />
          <div className="relative">
          <span className="bg-blue-400  text-white rounded-full text-lg  ml-1 px-1">{bannerCount}</span>
          <VscAccount />
          </div>

          <div className="relative">
            <span className="bg-blue-500 rounded-full text-lg   text-white ml-1 px-1">{count}</span>
            <IoCartOutline />
          </div>
          
        </div>
      </div>
    </>
  );
};
export default NavBar;
