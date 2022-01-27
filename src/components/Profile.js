import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
const Profile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  const auth = useAuth();
  return (
    <>
      <h1> Welcome {auth.User} </h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;
