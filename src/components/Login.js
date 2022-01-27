import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  const [User, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const RedirectPath = location.state?.path || "/";
  const handleLogin = () => {
    auth.login(User);
    navigate(RedirectPath, { replace: true });
  };
  return (
    <div>
      <label>
        Username :
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}> Login </button>
    </div>
  );
};

export default Login;
