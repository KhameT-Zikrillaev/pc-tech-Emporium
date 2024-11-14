import React from 'react';
import location from '/src/assets/images/location.png';

export default function EighthForm() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1B2838] to-[#2A3F54] p-6">
      <div className="max-w-4xl w-full bg-gray-800 bg-opacity-80 shadow-lg rounded-xl p-8 md:p-12 transform transition duration-700 hover:scale-105 border border-gray-700">
        
        {/* Заголовок */}
        <h2 className="text-4xl font-semibold text-center text-white mb-10 tracking-wider ">
          Связаться с нами
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">

          {/* Левая часть - Форма */}
          <div className="left flex flex-col space-y-6">
            
            {/* Имя */}
            <div className="relative">
              <input
                type="text"
                placeholder="Имя"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition duration-300"
              />
            </div>

            {/* Фамилия */}
            <div className="relative">
              <input
                type="text"
                placeholder="Фамилия"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition duration-300"
              />
            </div>

            {/* Номер телефона */}
            <div className="relative">
              <input
                type="tel"
                placeholder="Номер телефона"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition duration-300"
              />
            </div>

            {/* Кнопка отправки */}
            <button
              type="submit"
             className="bg-indigo-500 text-[12px] p480:text-[16px] bg-opacity-20 text-indigo-300 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-40 transition duration-300 transform hover:scale-105"
            >
              Отправить
            </button>
          </div>

          {/* Правая часть - Карта */}
          <div className="right bg-gray-700 bg-opacity-60 rounded-lg shadow-lg flex items-center justify-center">
          <iframe className='rounded-lg ' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2035.676863075005!2d69.20286754196145!3d41.33258027188475!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d0050816a0f%3A0xade9d9bf3920e2ad!2s11%20uy!5e1!3m2!1sru!2sus!4v1731600772752!5m2!1sru!2sus" width={'100%'} height={'100%'} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
