import React from 'react';

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <div className="cart-list">
        {cart.length === 0 ? (
          <p>Giỏ hàng của bạn trống!</p>
        ) : (
          cart.map((product, index) => (
            <div key={index} className="cart-item">
              <p>{product.name} - {product.price} VND</p>
            </div>
          ))
        )}
      </div>
      <div className="total">
        <h3>Tổng cộng: {totalPrice} VND</h3>
      </div>
    </div>
  );
};

export default Cart;
