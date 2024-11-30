// src/components/Shoes.js
import React from 'react';

function Shoes() {
  return (
    <div className="content">
      <h3>Giày Dép</h3>
      <ul>
        <li>
          <h4>Giày Thể Thao</h4>
          <p>Giá: 750.000 VND</p>
          <p>Mô tả: Giày thể thao, đế cao su bền, mang lại cảm giác thoải mái khi đi bộ lâu dài.</p>
        </li>
        <li>
          <h4>Giày Cao Gót</h4>
          <p>Giá: 900.000 VND</p>
          <p>Mô tả: Giày cao gót thiết kế tinh tế, giúp tăng chiều cao và thêm phần sang trọng cho các buổi tiệc.</p>
        </li>
        <li>
          <h4>Dép Sandal</h4>
          <p>Giá: 350.000 VND</p>
          <p>Mô tả: Dép sandal thời trang, thoải mái cho mùa hè, dễ dàng kết hợp với váy hoặc quần short.</p>
        </li>
        <li>
          <h4>Giày Boot</h4>
          <p>Giá: 1.000.000 VND</p>
          <p>Mô tả: Giày boot có thiết kế mạnh mẽ, phù hợp cho các chuyến đi chơi hay dạo phố trong mùa đông.</p>
        </li>
      </ul>
    </div>
  );
}

export default Shoes;
