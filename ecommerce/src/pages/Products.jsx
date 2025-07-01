import React from 'react';
import { Link } from 'react-router-dom';
import products from '../mockProducts';
import styles from './Products.module.css';


const Products = () => (
  <div className={styles.container}>
    <h2>Products</h2>
    <div style={{ display: 'flex', gap: '2rem' }}>
      {products.map(product => (
        <div key={product.id} className={styles.productCard}>
          <img src={product.image} alt={product.name} className={styles.productImage} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Link to={`/products/${product.id}`} className={styles.link}>View Details</Link>
        </div>
      ))}
    </div>
  </div>
);

export default Products;
