import React from 'react';
import { FaShippingFast } from "react-icons/fa";


export default function Cardadvantages({title,text,images}) {
  return (
    <div className="h-[250px] cursor-pointer">
      <div className="relative h-full group">
        <div className="rounded-3xl h-full overflow-hidden bg-[#EFEFEF]shadow-lg transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl hover:rotate-3">
          <img
            src={images}
            alt="Remont komputerov"
            className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 p-6 w-full bg-gradient-to-t from-black text-white bg-opacity-70 group-hover:bg-opacity-50 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2 transform group-hover:scale-110 transition-all duration-300">{text}</h3>
            <h4 className="text-lg font-medium mb-4 transform group-hover:scale-105 transition-all duration-300">{title}</h4>
            <button className="py-2 px-6 text-white  font-semibold rounded-full border-2 border-gray-800 hover:bg-slate-300 hover:text-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50">
              Подробнее
            </button>
          </div>
        </div>
        {/* Сложная тень без розового оттенка */}
        <div className="absolute inset-0 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}
