import React from 'react'

const UserProductCard = ({image,jobrole,firstName,lastName,companyName,companyAddress,city,state,phone,email,university}) => {
  
  return (
    
    <div className=' bg-slate-300 rounded-3xl font-serif  shadow-md '>
       <div ><img src={image} alt="image" /></div> 
        <div className='flex font-medium text-2xl '>
        <div className='mr-1'>{firstName}</div>
        <div>{lastName}</div>
        </div>
        <div><div>{jobrole}</div>
        <div>{companyName}</div></div>
      <div><div>{"address"+{companyAddress}}</div>
      <div>{"city"+{city}}</div>
      <div>{"state"+{state}}</div></div>
      <div>{"Phone:"+phone}</div>
      <div>{"Email:"+ email}</div>
      <div>{"education:"+university}</div>
    </div>
  )
}

export default UserProductCard;