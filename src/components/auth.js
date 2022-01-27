import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);

  const login = (User) => {
    setUser(User);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ User, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
