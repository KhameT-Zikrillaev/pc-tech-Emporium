import React from 'react';

export default function ClientCard({ name, image, text }) {
  return (
    <div className="swiper-card relative bg-gradient-to-br from-[#121212] via-[#2C2C2C] to-[#434343] text-white p-6 shadow-2xl rounded-[20px] transform transition-all duration-700 ease-in-out hover:scale-105 hover:rotate-3 group overflow-hidden">
      {/* Светящийся эффект с использованием градиента и blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6a11cb] via-[#2575fc] to-[#2c3e50] opacity-15 blur-3xl transition-all duration-500 ease-in-out group-hover:opacity-40"></div>

      {/* Обрезанные углы и новая форма карточки */}
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex gap-6 items-center">
          {/* Фото клиента с эффектом масштаба */}
          <div className="circle-photo rounded-full w-[80px] h-[80px] overflow-hidden border-4 border-[#FF2A68] transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:border-[#6a11cb]">
            <img className="client-photo_img object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110" src={image} alt={name} />
          </div>

          {/* Имя клиента с плавным переходом */}
          <h3 className="text-2xl font-semibold text-white group-hover:text-[#FF2A68] transition-all duration-300">{name}</h3>
        </div>

        <span className="w-full block h-[2px] my-4 bg-[#FF2A68]"></span>

        {/* Описание с плавным появлением */}
        <p className="text-sm text-gray-300 group-hover:text-white opacity-80 group-hover:opacity-100 transition-all duration-300">{text}</p>
      </div>

      {/* Фигурная обрезка карточки */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-transparent to-[#121212] rounded-t-full"></div>
    </div>
  );
}
