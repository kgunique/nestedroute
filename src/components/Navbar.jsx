import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',height:'2rem',backgroundColor:'cyan'}}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/users">User</Link>
        
      </nav>
    <Outlet/>
    </div>
  );
};

export default Navbar;
