// src/pages/CustomArrows.js
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`absolute top-1/2 left-2 transform -translate-y-1/2 z-10 ${className}`}
      style={{ ...style, backgroundColor: 'transparent' }}
      onClick={onClick}
    >
      <FaChevronLeft className="text-gray-700 text-3xl" />
    </button>
  );
};

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`absolute top-1/2 right-2 transform -translate-y-1/2 z-10 ${className}`}
      style={{ ...style, backgroundColor: 'transparent' }}
      onClick={onClick}
    >
      <FaChevronRight className="text-gray-700 text-3xl" />
    </button>
  );
};
