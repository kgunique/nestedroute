import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
  return <div>
      <input type="search"  placeholder='Search Your Product here'/>

      <nav>
        <Link to="feature">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet/>
  </div>;
};

export default Product;
