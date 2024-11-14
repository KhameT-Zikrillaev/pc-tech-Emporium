// Card.jsx
import React from 'react';

export default function Card({images}) {
  return (
    <div className="Card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out max-w-[300px] w-full p-4 m-4 flex justify-center items-center overflow-hidden transform hover:scale-105">
      <img 
        src={images} 
        alt="Brand Logo" 
        className="w-full h-auto object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
    </div>
  );
}
