import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaHandSparkles } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";

const NavBar = ({count}) => {
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
          <li>Deals</li>
          <li>Gear</li>
          <li>Courses</li>
          <li>Luts & Presets</li>
          <li>Editorial</li>
        </div>
        <div className="flex items-center justify-between p-2 text-2xl gap-5">
          <CiSearch />
          <FaHandSparkles />
          <VscAccount />

          <div className="relative">
            <span className="bg-red-600 text-white text-[10px] right-[-10px] rounded-full size-5 flex justify-center items-center absolute top-[-12px]">
                {count}

            </span>
            <IoCartOutline />
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
