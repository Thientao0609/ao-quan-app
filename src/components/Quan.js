import React from 'react';

function Quan() {
  return (
    <div className="quan-content">
      <h3>Quần Jeans Nam</h3>
      <div className="product-details">
        <img src="https://via.placeholder.com/400" alt="Quần Jeans" className="product-image" />
        <div className="product-info">
          <p className="product-price">Giá: 600.000 VND</p>
          <p className="product-description">
            Quần jeans nam ôm vừa, chất liệu bền đẹp, phù hợp với nhiều kiểu dáng và hoàn cảnh.
          </p>
          <p className="product-material">Chất liệu: Jean</p>
          <p className="product-size">Size: M, L, XL</p>
          <p className="product-care">Cách bảo quản: Giặt tay hoặc giặt máy ở nhiệt độ thấp.</p>
          <button className="add-to-cart-button">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
  );
}

export default Quan;
