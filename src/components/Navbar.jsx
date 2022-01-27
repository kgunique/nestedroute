import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar = () => {
  const auth = useAuth();
  return (
    <div>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "2rem",
          backgroundColor: "cyan",
        }}
      >
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/users">User</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        {!auth.User && <NavLink to="/login">Login</NavLink>}
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
