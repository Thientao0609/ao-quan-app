import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Shoes from './components/Shoes';
import Ao from './components/Ao';  // Trang áo
import Quan from './components/Quan';  // Trang quần
import Giay from './components/Giay';  // Trang giày
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/men/ao" element={<Ao />} />
          <Route path="/men/quan" element={<Quan />} />  {/* Route cho quần */}
          <Route path="/men/giay" element={<Giay />} />  {/* Route cho giày */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
