import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Admin from "./components/pages/Admin";
import FeatureProduct from "./components/pages/FeatureProduct";
import NewProduct from "./components/pages/NewProduct";
import Product from "./components/Product";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";

const Routing = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />}>
          <Route index element={<FeatureProduct />} />
          <Route path="feature" element={<FeatureProduct />} />
          <Route path="new" element={<NewProduct />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default Routing;
