import React from 'react';

export default function Card({ count, label, description }) {
  return (
    <div className="card-grid flex flex-col gap-4 items-center p-5  bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md max-w-[320px] w-full">
      <h2 className="font-[Furore] font-semibold text-[50px] text-white">
        {count}
      </h2>
      <h3 className="font-[Furore] font-normal text-[24px] mb-3 text-white text-center">{label}</h3>
      <p className="max-w-[280px] w-full text-center text-white mx-auto mb-3 text-sm">
        {description}
      </p>
      <div className="w-full h-[1px] bg-gray-300"></div>
    </div>
  );
}
