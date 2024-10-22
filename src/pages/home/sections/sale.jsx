import React from 'react'
import './sale.css'

import saleone from '/src/assets/images/pubg-photo.png';
import saletwo from '/src/assets/images/fornite-photo.png';
import salethree from '/src/assets/images/blackdesert-photo.png';
import salefour from '/src/assets/images/dota-photo.png';
export default function sale() {
  return (
    <div className='sale bg-black relative'>
         <div className="overlay"></div>
        <div className="container mx-[10px] relative px-10  p480:h-[700px]  p768:h-[900px] w-full">

        <div className="left-vector absolute mx-2  left-[5%] top-0 h-full w-[50px]">
      <div className='relative h-full flex flex-col justify-center'>
        <span className='linear h-[10%] w-[2px] hidden p480:flex p480:ml-[48%] p768:ml-[64%] mb-[-13px]' style={{ transform: 'rotate(45deg)' }}></span>
        <span className='linear h-[80%] w-[2px]'></span>
        <span className='linear h-[10%] w-[2px] hidden p480:flex p480:ml-[48%] p768:ml-[64%] mt-[-13px]' style={{ transform: 'rotate(-45deg)' }}></span>
      </div>
    </div>

    <div className="right-vector absolute mx-2 right-[5%] top-0 h-full w-[50px] rotate-180">
      <div className='relative h-full flex flex-col justify-center'>
        <span className='linear h-[10%] w-[2px] hidden p480:flex p480:ml-[48%] p768:ml-[64%] mb-[-13px]' style={{ transform: 'rotate(45deg)' }}></span>
        <span className='linear h-[80%] w-[2px]'></span>
        <span className='linear h-[10%] w-[2px] hidden p480:flex p480:ml-[48%] p768:ml-[64%] mt-[-13px]' style={{ transform: 'rotate(-45deg)' }}></span>
      </div>
    </div>


        <div className=' text-white flex flex-col p768:flex-row  gap-4 justify-center items-center p-2 rounded-lg shadow-lg'>
  <h2 className='text-[20px] p992:text-[28px]  mt-[60px] p480:mt-[0px] p480:mx-[50px] text-center font-bold leading-snug bg-gradient-to-r from-[#607d8b] via-[#6cb4d8] to-[#ccc1c1] text-transparent bg-clip-text'>
    Покупайте компьютер у нас и получайте 5% <br/> 
    от суммы обратно на ваш аккаунт
  </h2>
  <img className='max-w-[50px] mx-[-50px] w-full' src='https://i.imgur.com/1VQnIJl.png' alt="Steam logo" />
       </div>
         <p className='text-center text-[16px] p992:text-[20px] text-white animate-pulse my-4'>
  Время покупать и наслаждаться любимыми играми!
        </p>


        <div className="grid-container grid  grid-cols-1 p480:grid-cols-2 w-[80%]  mx-auto m-[10px] ">

            <div className="grid-card max-w-[250px] p768:max-w-[350px] w-full mx-auto relative">
            <button className='bg-gradient-to-r z-10 right-[2%] top-[1%] absolute text-white font-bold  py-1  p768:py-2  px-4  p768:px-8 rounded-lg shadow-lg animate-bg'>
                Купить
            </button>
                  <img src={saleone}  className="h-auto w-full rounded-lg animate-shadow" alt="" />
              
            </div>

            <div className="grid-card max-w-[250px] p768:max-w-[350px] w-full mx-auto relative">
            <button className='bg-gradient-to-r z-10 right-[2%] top-[1%] absolute text-white font-bold  py-1  p768:py-2  px-4  p768:px-8 rounded-lg shadow-lg animate-bg'>
                Купить
            </button>
            <img src={saletwo}  className="h-auto w-full rounded-lg animate-shadow" alt="" />
            </div>

            <div className="grid-card max-w-[250px] p768:max-w-[350px] w-full mx-auto relative">
            <button className='bg-gradient-to-r z-10 right-[2%] top-[1%] absolute text-white font-bold  py-1  p768:py-2  px-4  p768:px-8 rounded-lg shadow-lg animate-bg'>
                Купить
            </button>
            <img src={salethree}  className="h-auto w-full rounded-lg animate-shadow" alt="" />
                <button>Купить</button>
            </div>
            <div className="grid-card max-w-[250px] p768:max-w-[350px] w-full mx-auto relative">
            <button className='bg-gradient-to-r z-10 right-[2%] top-[1%] absolute text-white font-bold  py-1  p768:py-2  px-4  p768:px-8 rounded-lg shadow-lg animate-bg'>
                Купить
            </button>
            <img src={salefour}  className="h-auto w-full rounded-lg animate-shadow" alt="" />
                <button>Купить</button>
            </div>
        </div>
        </div>
    </div>
  )
}
