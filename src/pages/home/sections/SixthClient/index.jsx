import React from 'react';
import Cardadvantages from './components/Cardadvantages.jsx';
import Cardfeatures from './components/Cardfeatures.jsx';
import '../SixthClient/index.css';
import  FirstClient from './data/FirstClient.js'; 
import  SecondClient from './data/SecondClient.js';
import fon from '/src/assets/images/fon-viezd.png';
import { FaShippingFast, FaClock, FaCheckCircle, FaTools } from "react-icons/fa";
export default function Index() {
  return (
    <>
      <div className='bg-white w-full relative  p-2 p768:p-9'>
        <img className='absolute hidden p768:flex max-w-[500px] w-full left-[10%]  p768:top-[10%] p992:top-[15%] opacity-70' src={fon} alt="" />
        <div className="container p768:p-5">
{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~features section-1~~~~~~~~~~ */}
         <div className="features">
         <h2 className=" text-3xl   p480:text-4xl  p768:text-5xl font-bold text-center text-black " >
  Наши Перемущество
  </h2>
  <div className="w-[80%] h-[2px] mx-auto bg-gradient-to-r from-teal-500 to-blue-600 my-4"></div>
  
  <div className="cards my-10 w-full flex flex-col space-y-4">
    <div className='card-items-container w-full  p768:w-[90%] p992:w-[80%] mx-auto gap-10 flex flex-col items-center  '>
    <Cardfeatures style={'  p768:!ml-auto p992:!ml-[10%]'} icon={FaShippingFast} title="Быстрый выезд" text="Можете доверять мы Приедем к вам в течение" nums={3} datatitle="часов" />
<Cardfeatures style={'  p768:!ml-[0%] p992:!ml-[20%]'} icon={FaClock} title="Заправка картриджей" text="Максимально быстрая заправка картриджа" nums={15} datatitle="минут" />
<Cardfeatures style={ ' p768:!ml-auto p992:!ml-[30%]'} icon ={FaCheckCircle} title="Гарантия на товар" text="Используем только оригинальные картриджи и тонеры" nums={6} datatitle="месяцев" />
<Cardfeatures style={' p768:!ml-[0%]  p992:!ml-[40%]'} icon={FaTools} title="Оперативная поддержка" text="Быстро решаем вопросы и устраняем неполадки" nums={24} datatitle="часа" />

    </div>

 </div>
         
    </div>


 {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~advantages  section-2~~~~~~~ */}
       <div className="advantages">
       <h2 className=" text-3xl   p480:text-4xl  p768:text-5xl font-bold text-center text-black" >
  Наши Услуги
  </h2>

  <div className="w-[70%]  h-[2px] mx-auto bg-gradient-to-r from-teal-500 to-blue-600 my-4"></div>
          {/* Первая строка */}
          <div className="card-row-1 mt-10">
            {FirstClient.map((item, index) => (
              <Cardadvantages 
                key={index}
                title={item.title}
                text={item.text}
                images={item.images}
                size="45%" // можно добавить сюда пропс для размеров
              />
            ))}
          </div>

          {/* Вторая строка */}
          <div className="card-row-2 mt-10">
            {SecondClient.map((item, index) => (
              <Cardadvantages
                key={index}
                title={item.title}
                text={item.text}
                images={item.images}
                size="30%" // можно добавить сюда пропс для размеров
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
