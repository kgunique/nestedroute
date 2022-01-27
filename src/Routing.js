import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/auth";
// import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Admin from "./components/pages/Admin";
import FeatureProduct from "./components/pages/FeatureProduct";
import NewProduct from "./components/pages/NewProduct";
import Product from "./components/Product";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
const LazyAbout = React.lazy(() => import("./components/About"));

const Routing = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback={"...loading"}>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="product" element={<Product />}>
          <Route index element={<FeatureProduct />} />
          <Route path="feature" element={<FeatureProduct />} />
          <Route path="new" element={<NewProduct />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route
          path="users"
          element={
            <RequireAuth>
              <Users />
            </RequireAuth>
          }
        >
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
};

export default Routing;
