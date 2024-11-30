import React from 'react';

function Giay() {
  return (
    <div className="giay-content">
      <h3>Giày Thể Thao Nam</h3>
      <div className="product-details">
        <img src="https://via.placeholder.com/400" alt="Giày Thể Thao" className="product-image" />
        <div className="product-info">
          <p className="product-price">Giá: 800.000 VND</p>
          <p className="product-description">
            Giày thể thao nam thoải mái, chất liệu đế cao su giúp tăng cường độ bám và sự thoải mái khi vận động.
          </p>
          <p className="product-material">Chất liệu: Đế cao su, vải thoáng khí</p>
          <p className="product-size">Size: 40, 41, 42, 43</p>
          <p className="product-care">Cách bảo quản: Giặt nhẹ bằng tay, không phơi trực tiếp dưới nắng gắt.</p>
          <button className="add-to-cart-button">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
  );
}

export default Giay;
