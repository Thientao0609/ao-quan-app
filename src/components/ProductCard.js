// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Giá: {product.price.toLocaleString()} VND</p>
      <p>Size: {product.size}</p>
      <p>Màu: {product.color}</p>
      <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
    </div>
  );
};

export default ProductCard;
