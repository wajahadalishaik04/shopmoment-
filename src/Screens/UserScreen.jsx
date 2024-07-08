import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserProductCard from '../Components/UserProductCard';

const UserScreen = () => 
    {
    const [userdata,setUserData] = useState([]);
    
   const getUserApiData = async () =>
    {
       const userdata = await axios.get("https://dummyjson.com/users");

      const companyName = userdata.data.company.name
      const jobrole = userdata.data.company.title
      const companyAddress = userdata.data.company.address
      const city = userdata.data.company.city
      const state = userdata.data.company.state

        ( setUserData(userdata.data.users));
        
    }
    useEffect(()=>{
        getUserApiData();
    },[])

  return (
    <>
    <div>
   {userdata.map((e)=><UserProductCard key={e.id}image={e.image} firstName={e.firstName} lastName={e.lastName} jobrole={e.jobrole} companyName={e.companyName} companyAddress= {e.companyAddress}city={e.city} state={e.state} phone={e.phone}email={e.email}university={e.university} />)}
    </div>
    <div>
    <div>
  {Object.keys(company).map((key, index) => (
    <div key={index}>{key}: {company[key]}</div>
  ))}
</div>
    </div>
     
    <div>hello</div>

    </>
  )
}

export default UserScreen