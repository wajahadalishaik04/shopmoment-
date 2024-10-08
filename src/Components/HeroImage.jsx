import React from "react";
import { breakText } from "../../Prac";
import { useDispatch } from "react-redux";
const HeroImage = ({ image, title, description, btn }) => {
  const dispatch = useDispatch();
  const handleHeroEvent = () => {
    dispatch({ type: "increaseCount" });
  };
  return (
    <>
      <div className=" w-full h-5/6 relative  mt-28 px-12 font-serif text-white">
        <img className="w-full h-full rounded-xl " src={image} alt=""></img>
        <div className="absolute top-20 pl-3  text-white md:text-sm  ">
          <h1 className=" flex flex-col text-8xl  p-4  ">
            {breakText(title).map((e) => (
              <span>{e}</span>
            ))}{" "}
          </h1>
          <p className="text-2xl  pl-4 p-1 mb-3">{description}</p>
          <button
            onClick={handleHeroEvent}
            className="p-5 m-3 text-black bg-white hover:bg-slate-200 rounded-md shadow-md"
          >
            {btn}
          </button>
        </div>
      </div>
    </>
  );
};
export default HeroImage;
