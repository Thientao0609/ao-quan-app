// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <h1>Chào mừng bạn đến với Trang Home</h1>
      
      <div className="buttons">
        <Link to="/men">
          <button className="btn">Đồ Nam</button>
        </Link>
        <Link to="/women">
          <button className="btn">Đồ Nữ</button>
        </Link>
        <Link to="/shoes">
          <button className="btn">Giày Dép</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
