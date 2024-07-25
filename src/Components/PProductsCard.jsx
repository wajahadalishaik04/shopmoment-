import React from 'react'

const PProductsCard = ({thumbnail,title,stock,description,price}) => {
    return(
        <>
        <div className=" w-80 m-2   p-2 font-serif rounded-2xl shadow-lg bg-slate-200 ">
              <span className=" my-2 p-1 bg-blue-500 rounded-xl text-white">
                Last few
              </span>
              <img
                className=" w-64 h-auto object-cover   rounded-xl m-5"
                src={thumbnail}
              ></img>
              <h1 className="text-2xl px-5 mb-4">{title}</h1>
              <p>{description}</p>
              <div className="px-4 mt-3 mb-2 font-sans">
                <span className=" mr-5  bg-gray-500  p-1 rounded-xl text-gray-50">
                  Stock: {stock}
                </span>
                <span className="text-lg font-normal  px-4">
                  price:$ {price}
                </span>
                <br></br>
                <button  className="bg-blue-500 p-2  mt-3 ml-2 hover:bg-blue-600 text-slate-50 rounded-xl" >
          ADD TO CART
        </button>

              </div>
        </div>
        </>
    )
}
export default PProductsCard;
    