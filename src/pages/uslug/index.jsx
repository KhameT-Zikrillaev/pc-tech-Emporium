import React from 'react'
import Cardadvantages from './components/Cardadvantages.jsx';
import  FirstClient from './data/FirstClient.js'; 
import  SecondClient from './data/SecondClient.js';
export default function Uslug() {
  return (
    <>  <div className="advantages bg-gradient-to-r from-[#1B2838] to-[#2A3F54]">
      <div className="container p-4">
         <h2 className="text-md p480:text-xl p768:text-2xl font-bold text-center text-zinc-300">
          Наша Услуги
        </h2>
        <div className="w-[80%] h-[2px] mx-auto bg-zinc-300 my-4 opacity-10"></div>
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
       </div></>
  )
}
