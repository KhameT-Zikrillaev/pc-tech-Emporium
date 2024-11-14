import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Импортируем framer-motion
import Card from './components/card'; // Путь к компоненту Card
import databrand from './data/databrand'; // Путь к данным

export default function Brand() {
  const [showAll, setShowAll] = useState(false);

  // Функция для переключения отображения всех карточек
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="brandpages bg-gradient-to-r from-[#1B2838] to-[#2A3F54]">
      <div className="container flex flex-col justify-center items-center">
        <h2 className="text-md p480:text-xl p768:text-2xl font-bold text-center text-zinc-300">
          Продажа и Бренды
        </h2>
        <div className="w-[80%] h-[2px] mx-auto bg-zinc-300 my-4 opacity-10"></div>
    
        {/* Добавляем анимацию для отображаемых карточек */}
        {databrand.slice(0, showAll ? databrand.length : 4).map((brand, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} // Начальная позиция карточки
            animate={{ opacity: 1, y: 0 }} // Конечная позиция карточки
            transition={{ duration: 0.5, delay: index * 0.1 }} // Плавное появление с задержкой
            className="mx-auto flex flex-row items-center justify-center" // Центрирование карточки
          >
            <Card brand={brand} />
          </motion.div>
        ))}
        
        <button 
          onClick={toggleShowAll} 
         className="bg-indigo-500 my-2 text-[12px] p480:text-[16px] bg-opacity-20 text-indigo-300 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-40 transition duration-300 transform hover:scale-105"
        >
          {showAll ? 'Скрыть' : 'Показать все'}
        </button>
      </div>
    </div>
  );
}
