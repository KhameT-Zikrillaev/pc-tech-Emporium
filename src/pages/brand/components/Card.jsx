import React from 'react';

export default function Card({ brand }) {
  return (
    <div className="w-[70%] p-2 bg-gradient-to-r from-[#2A3F54] to-[#1B2838] rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row my-2">
      <div className="md:w-1/2 flex justify-center items-center bg-gradient-to-r from-[#0F1923] to-[#5e6369] p-4 rounded-lg shadow-lg">
        <img className="w-[180px]  p-2  object-contain rounded-xl shadow-xl transform transition-all hover:scale-105" src={brand.images} alt={brand.title} />
      </div>
      <div className="md:w-1/2 px-4 py-1 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-white mb-2">
          Партнерство с <span className="text-red-600">{brand.title}</span>
        </h3>
        <p className="text-white text-md leading-relaxed">
          {brand.description.split(brand.title).map((part, index) => (
            <span key={index}>
              {index > 0 && <span className="font-semibold text-red-600">{brand.title}</span>}
              {part}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
