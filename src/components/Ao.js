import React from 'react';

function Ao() {
  return (
    <div className="ao-content">
      <h3>Áo Sơ Mi Nam</h3>
      <div className="product-details">
        <img src="https://via.placeholder.com/400" alt="Áo Sơ Mi" className="product-image" />
        <div className="product-info">
          <p className="product-price">Giá: 500.000 VND</p>
          <p className="product-description">
            Áo sơ mi nam chất liệu vải cotton thoáng mát, kiểu dáng thanh lịch, phù hợp đi làm và dạo phố.
          </p>
          <p className="product-material">Chất liệu: Vải cotton</p>
          <p className="product-size">Size: M, L, XL</p>
          <p className="product-care">Cách bảo quản: Giặt tay hoặc giặt máy ở nhiệt độ thấp.</p>
          <button className="add-to-cart-button">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
  );
}

export default Ao;
