import React from 'react';
import { breakText } from '../../Prac';
const HeroImage = ({image,title,description,btn}) =>
    {
        
        return (
            <>
            <div className=' w-full h-5/6 relative  mt-10 px-12 font-serif text-white' >
             <img className='w-full h-full rounded-xl ' src={image} alt=""></img>
             <div className="absolute top-36 pl-3   " >   
                <h1 className=' flex flex-col text-8xl  p-4  '>{ breakText(title).map((e)=> <span>{e}</span>) } </h1>
                <p className='text-2xl  pl-4 p-1 mb-3'>{description}</p>
                <button className='p-5 m-3 text-black bg-white hover:bg-slate-200 rounded-md shadow-md'>{btn}</button>
            </div>
            </div>
            
            </>
        )
    }
    export default HeroImage;