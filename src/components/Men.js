import React from 'react';
import { Link } from 'react-router-dom';  // Import Link nếu bạn muốn điều hướng
import '../App.css'; // Đảm bảo rằng bạn đã thêm tệp CSS vào project

function Men() {
  return (
    <div className="men-content">
      <h3 className="men-title">Đồ Nam</h3>

      {/* Các nút điều hướng cho Áo, Quần, Giày */}
      <div className="category-buttons">
        <Link to="/men/ao" className="category-button">Áo</Link>
        <Link to="/men/quan" className="category-button">Quần</Link>
        <Link to="/men/giay" className="category-button">Giày</Link>
      </div>

      <div className="product-list">
        {/* Áo sơ mi */}
        <div className="product-item">
          <img src="https://via.placeholder.com/150" alt="Áo Sơ Mi" className="product-image" />
          <div className="product-info">
            <h4>Áo Sơ Mi</h4>
            <p className="product-price">Giá: 500.000 VND</p>
            <p className="product-description">
              Áo sơ mi nam chất liệu vải cotton thoáng mát, kiểu dáng thanh lịch, phù hợp đi làm và dạo phố.
            </p>
            <Link to="/men/ao">
              <button className="product-button">Xem Áo</button>
            </Link>
          </div>
        </div>

        {/* Quần jeans */}
        <div className="product-item">
          <img src="https://via.placeholder.com/150" alt="Quần Jeans" className="product-image" />
          <div className="product-info">
            <h4>Quần Jeans</h4>
            <p className="product-price">Giá: 600.000 VND</p>
            <p className="product-description">
              Quần jeans nam ôm vừa, chất liệu bền đẹp, phù hợp với nhiều kiểu dáng và hoàn cảnh.
            </p>
            <Link to="/men/quan">
              <button className="product-button">Xem Quần</button>
            </Link>
          </div>
        </div>

        {/* Giày thể thao */}
        <div className="product-item">
          <img src="https://via.placeholder.com/150" alt="Giày Thể Thao" className="product-image" />
          <div className="product-info">
            <h4>Giày Thể Thao</h4>
            <p className="product-price">Giá: 800.000 VND</p>
            <p className="product-description">
              Giày thể thao nam thoải mái, chất liệu đế cao su giúp tăng cường độ bám và sự thoải mái khi vận động.
            </p>
            <Link to="/men/giay">
              <button className="product-button">Xem Giày</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Men;
