'use client'
import MiniDrawer from "@/component/drawer/drawer";
import React, { useState } from "react";

const Layout = ({ children }) => {
  // Initialize toggle state
  const [toggle, setToggle] = useState(false);

  // Example function to toggle state
  const handleToggle = () => {
    // Check if toggle is not undefined
    if (typeof toggle !== "undefined") {
      setToggle(!toggle);
    }
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      <MiniDrawer>
   {children}
      </MiniDrawer>
    </div>
  );
};

export default Layout;
