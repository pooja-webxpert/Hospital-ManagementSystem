"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({ children }) => {

  const [selectedPatient, setSelectedPatient] = useState(null);

useEffect(()=>{
  localStorage.setItem("selectedPatient",JSON.stringify(selectedPatient))
})

  return (
    <UserContext.Provider
      value={{
        selectedPatient,
        setSelectedPatient
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
