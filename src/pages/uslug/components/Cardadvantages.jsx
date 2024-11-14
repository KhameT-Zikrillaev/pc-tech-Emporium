import React from 'react';

export default function Cardadvantages({ title, text, images }) {
  return (
    <div className="h-[250px] cursor-pointer">
      <div className="relative h-full border-2 border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <img
          src={images}
          alt="Card image"
          className="w-full h-[200px] object-cover transition-transform duration-300 transform hover:scale-105"
        />
        <div className="absolute bottom-[50px] left-4 right-4">
          <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
          <p className="text-sm text-white mb-2">{text}</p>
        </div>
        <button className="absolute bottom-4 right-4 py-2 px-4 text-white font-semibold border-2 border-gray-700 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 focus:outline-none">
          Подробнее
        </button>
      </div>
    </div>
  );
}
