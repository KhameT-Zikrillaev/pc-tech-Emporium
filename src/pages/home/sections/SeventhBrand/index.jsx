// SeventhBrand.jsx
import React from 'react';
import Card from './components/Card';
import databrand from './data/databrand';

export default function SeventhBrand() {
  return (
    <div className="SeventhBrand bg-white py-10">
      <div className="container">
        <h2 className="text-3xl p480:text-4xl p768:text-5xl font-bold text-center text-black">
          Наши Бренды
        </h2>
        <div className="w-[80%] h-[2px] mx-auto bg-gradient-to-r from-teal-500 to-blue-600 my-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center mx-auto">
          {/* Перебираем массив databrand и передаем данные в компоненты Card */}
          {databrand.map((brandItem, index) => (
            <Card key={index} images={brandItem.images} />
          ))}
        </div>
      </div>
    </div>
  );
}
