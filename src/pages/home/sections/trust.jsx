import React from 'react'
import './trust'
import check from '/src/assets/images/check.svg';
import trustphoto from '/src/assets/images/pc-tech.png';
export default function trust() {
  return (
    <div className='trust bg-[#121212] py-[50px] text-white'>
       <div className="container h-[600px] flex justify-around">
         <div className="left">
            <h3 className='trust-title text-center font-[Furore] text-[40px] leading-[56px] font-normal'>
                НАМ ДОВЕРЯЮТ, <br/>
                НАС ВЫБИРАЮТ
            </h3>
            <ul className='flex flex-col gap-5 mt-[50px]'>
                <li className='flex gap-2'>
                    <img src={check} alt="" />
                    <span className='mt-4 max-w-[320px] w-full'>
                    Лучший конфигуратор для полной кастомизации компьютера
                    </span>
                </li>

                <li className='flex gap-2'>
                    <img src={check} alt="" />
                    <span className='mt-4 max-w-[320px] w-full'>
                    Лучшие комплектующие и новые технологии на рынке
                    </span>
                </li>
    
                <li className='flex gap-2'>
                    <img src={check} alt="" />
                    <span className='mt-4 max-w-[320px] w-full'>
                    Профессиональная сборка, кастомизация и собственное производство
                    </span>
                </li>

                <li className='flex gap-2'>
                    <img src={check} alt="" />
                    <span className='mt-4 max-w-[320px] w-full'>
                    Тестирование, установка ПО, доставка и настройка компьютера под ключ
                    </span>
                </li>
           
           
                <li className='flex gap-2'>
                    <img src={check} alt="" />
                    <span className='mt-4 max-w-[320px] w-full'>
                    Фирменная гарантия и сервисное обслуживание
                    </span>
                </li>
            </ul>
         </div>
         <div className="right">
               <img className='h-full' src={trustphoto} alt="" />
         </div>
       </div>
    </div>
  )
}