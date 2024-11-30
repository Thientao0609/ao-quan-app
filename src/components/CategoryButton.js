// src/components/CategoryButton.js
import React from 'react';

function CategoryButton({ category, label, onClick }) {
  return (
    <button className="btn" onClick={() => onClick(category)}>
      {label}
    </button>
  );
}

export default CategoryButton;
