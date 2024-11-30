// src/components/ProductList.js
import React from 'react';

function ProductList({ category }) {
  const getProductList = () => {
    switch (category) {
      case 'nam': // Đồ Nam
        return (
          <>
            <h3>Đồ Nam</h3>
            <ul>
              <li>
                <h4>Áo Sơ Mi</h4>
                <p>Giá: 500.000 VND</p>
                <p>Mô tả: Áo sơ mi nam chất liệu vải cotton thoáng mát, kiểu dáng thanh lịch, phù hợp đi làm và dạo phố.</p>
              </li>
              <li>
                <h4>Quần Jeans</h4>
                <p>Giá: 600.000 VND</p>
                <p>Mô tả: Quần jeans nam ôm vừa, chất liệu bền đẹp, phù hợp với nhiều kiểu dáng và hoàn cảnh.</p>
              </li>
              <li>
                <h4>Giày Thể Thao</h4>
                <p>Giá: 800.000 VND</p>
                <p>Mô tả: Giày thể thao nam thoải mái, chất liệu đế cao su giúp tăng cường độ bám và sự thoải mái khi vận động.</p>
              </li>
            </ul>
          </>
        );
      case 'nu': // Đồ Nữ
        return (
          <>
            <h3>Đồ Nữ</h3>
            <ul>
              <li>
                <h4>Váy Dạ Hội</h4>
                <p>Giá: 1.200.000 VND</p>
                <p>Mô tả: Váy dạ hội nữ đẹp, thiết kế tinh tế và sang trọng, phù hợp cho các bữa tiệc hoặc sự kiện đặc biệt.</p>
              </li>
              <li>
                <h4>Áo Khoác Dài</h4>
                <p>Giá: 950.000 VND</p>
                <p>Mô tả: Áo khoác dài nữ, chất liệu nỉ dày dặn, giữ ấm tốt, dễ dàng phối đồ cho mùa đông lạnh.</p>
              </li>
              <li>
                <h4>Giày Cao Gót</h4>
                <p>Giá: 700.000 VND</p>
                <p>Mô tả: Giày cao gót nữ, thiết kế thanh lịch, dễ dàng phối hợp với nhiều kiểu trang phục.</p>
              </li>
            </ul>
          </>
        );
      case 'giaydep': // Giày Dép
        return (
          <>
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
          </>
        );
      default:
        return <p>Vui lòng chọn loại đồ để xem sản phẩm.</p>;
    }
  };

  return <div className="content">{getProductList()}</div>;
}

export default ProductList;
