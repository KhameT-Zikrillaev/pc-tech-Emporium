import React from 'react';

export default function Card({ title, text, img }) {
  return (
    <div className="card  w-[90%] h-[200px] p480:h-[220px]  p768:w-[220px] cursor-pointer p768:h-[120px] overflow-hidden relative group rounded-lg shadow-lg transition-all duration-500">
      {/* Анимация линии, которая будет светиться по краям */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-blue-500 group-hover:via-indigo-500 group-hover:to-purple-500 border-4 border-transparent rounded-lg transition-all duration-1000"></div>

      {/* Изображение с эффектом вращения и увеличения */}
      <div className="w-full h-full transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3">
        <img 
          src={img} 
          alt="Image" 
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      {/* Основной текст с эффектом пульсации, закругленными углами и градиентным фоном */}
      <h3 className="title absolute z-10 text-white text-sm text-center w-[80%] font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 uppercase px-4 py-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 group-hover:opacity-0 group-hover:scale-110 transition-all duration-500 rounded-xl shadow-lg">
        {title}
      </h3>

      {/* Текст о продукте с эффектом появления и фона с прозрачностью */}
      <div className="absolute w-full h-full flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-md font-semibold bg-gradient-to-b from-black via-transparent to-black bg-opacity-50 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <span className="relative text-2xl font-bold bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent group-hover:text-white group-hover:text-[rgba(0,0,0,0)] group-hover:stroke-[2px] group-hover:stroke-black transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
          {text}
        </span>
      </div>
    </div>
  );
}
