import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#f8f8f8', marginBottom: '2rem', display: 'flex', gap: '2rem' }}>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/cart">Cart</Link>
    <span style={{ color: '#888', marginLeft: 'auto', fontSize: '0.9rem' }}>
      (Product images are placeholders)
    </span>
  </nav>
);

export default Navbar;
