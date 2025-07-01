import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <h1>Welcome to the Simple Ecommerce Store</h1>
    <Link to="/products">View Products</Link>
  </div>
);

export default Home;
