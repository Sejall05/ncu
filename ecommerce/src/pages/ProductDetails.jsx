import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../mockProducts';


const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  if (!product) return <div>Product not found.</div>;
  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: 300 }} />
      <p>{product.description}</p>
      <p><b>Price:</b> ${product.price}</p>
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default ProductDetails;
