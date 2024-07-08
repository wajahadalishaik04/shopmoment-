import axios from "axios";
import React, { useEffect, useState } from "react";
import UserProductCard from "../Components/UserProductCard";
import { useDispatch, useSelector } from "react-redux";

const UserScreen = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((e) => e.usersReducers);

  const getUserApiData = async () => {
    const { data } = await axios.get("https://dummyjson.com/users");
    dispatch({ type: "addUsers", payload: data.users });
  };
  useEffect(() => {
    if (!users.length) {
      getUserApiData();
    }
  }, [users]);

  return (
    <>
      <div>
        {users.map((e) => (
          <UserProductCard
            key={e.id}
            image={e.image}
            firstName={e.firstName}
            lastName={e.lastName}
            jobrole={e.jobrole}
            companyName={e.company.name}
            companyAddress={e.company.address.city}
            city={e.company.address.city}
            state={e.company.address.state}
            phone={e.phone}
            email={e.email}
            university={e.university}
          />
        ))}
      </div>
      <div>
        <div>
          {/* {Object.keys(company).map((key, index) => (
            <div key={index}>
              {key}: {company[key]}
            </div>
          ))} */}
        </div>
      </div>

      <div>hello</div>
    </>
  );
};

export default UserScreen;
