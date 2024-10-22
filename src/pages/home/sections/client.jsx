import React from 'react'
import './client.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import clientone from '/src/assets/images/client-1.jpg';
import clienttwo from '/src/assets/images/client-2.webp';
import clientthree from '/src/assets/images/client-3.webp';
import clientfour from '/src/assets/images/client-4.webp';
import clientfive from '/src/assets/images/client-5.jpg';
import clientsix from '/src/assets/images/client-6.webp';
import clientseven from '/src/assets/images/client-7.jpg';
export default function Client() {
  const navigationButtons = {
    nextEl: '.sales__button-next',
    prevEl: '.sales__button-prev',
  };
  return (
    <div className='clients bg-black mt-[-10px] py-[50px]'>
       <div className="container relative">
        <h2 className='text-white text-center text-[40px] my-2'>Отзыв клиентов</h2>
       <Swiper
          slidesPerView={1}
          pagination={{
            type: 'fraction',
          }}
          spaceBetween={80}
          navigation={navigationButtons}
          loop={false}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
  
            1024: {
              slidesPerView: 3, 
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="MySwiperTwo mt-10"
        >

           <SwiperSlide className='swiper-card bg-[#18171C] text-white rounded-md p-[20px]'>
            <div className='flex gap-3'>
              <div className='circle-photo  rounded-full w-[50px] h-[50px] overflow-hidden'>
                <img className='client-photo_img object-cover scale-150' src={clientone} alt="" />
              </div>
              <h3 className='text-white'>Достон <br/> Ерназаров</h3>
              </div>
              <span className='w-full block h-[2px] my-3 bg-[#DC2626]'></span>
           
              <p>Хочу выразить благодарность команде Pc-tech маркет за профессионализм и качественную работу. Огромное спасибо Константину за помощь и инженерам за отличный монтаж проводов. Рад, что нашёл такой лояльный сервис в Узбекистане.</p>
            </SwiperSlide>

            <SwiperSlide className='swiper-card bg-[#18171C] text-white rounded-md p-[20px]'>
            <div className='flex gap-3'>
              <div className='circle-photo  rounded-full w-[50px] h-[50px] overflow-hidden'>
                <img className='client-photo_img object-cover scale-105' src={clienttwo} alt="" />
              </div>
              <h3 className='text-white'>Дилноза<br/>Назарова</h3>
              </div>
              <span className='w-full block h-[2px] my-3 bg-[#DC2626]'></span>
           
              <p>Команда Pc-tech маркет — это профессионалы своего дела! Они не только помогли подобрать комплектующие для моего нового компьютера, но и быстро доставили его. Отдельное спасибо за дружелюбное обслуживание и персонализированный подход</p>
            </SwiperSlide>
           
            <SwiperSlide className='swiper-card bg-[#18171C] text-white rounded-md p-[20px]'>
            <div className='flex gap-3'>
              <div className='circle-photo  rounded-full w-[50px] h-[50px] overflow-hidden'>
                <img className='client-photo_img object-cover scale-105' src={clientthree} alt="" />
              </div>
              <h3 className='text-white'>Шухрат<br/>Абдуманнопов</h3>
              </div>
              <span className='w-full block h-[2px] my-3 bg-[#DC2626]'></span>
           
              <p>Услуги Pc-tech маркет приятно удивили. Сборка ПК выполнена быстро и качественно, а кабели уложены аккуратно. Приятно иметь дело с командой, которая ценит своих клиентов и делает свою работу на высоком уровне.</p>
            </SwiperSlide>

            <SwiperSlide className='swiper-card bg-[#18171C] text-white  rounded-md p-[20px]'>
            <div className='flex gap-3'>
              <div className='circle-photo  rounded-full w-[50px] h-[50px] overflow-hidden'>
                <img className='client-photo_img object-cover scale-150' src={clientfour} alt="" />
              </div>
              <h3 className='text-white'>Сабина<br/>Баратова</h3>
              </div>
              <span className='w-full block h-[2px] my-3 bg-[#DC2626]'></span>
           
              <p>Обратилась в Pc-tech маркет за новым компьютером для работы, и осталась в полном восторге. Получила не только мощный ПК, но и полезные советы по его эксплуатации. Очень довольна качеством обслуживания.</p>
            </SwiperSlide>

            <SwiperSlide className='swiper-card bg-[#18171C] text-white rounded-md p-[20px]'>
            <div className='flex gap-3'>
              <div className='circle-photo  rounded-full w-[50px] h-[50px] overflow-hidden'>
                <img className='client-photo_img object-cover scale-150' src={clientfive} alt="" />
              </div>
              <h3 className='text-white'>Хуршид<br/>Эргашов</h3>
              </div>
              <span className='w-full block h-[2px] my-3 bg-[#DC2626]'></span>
           
              <p>Собрали для меня отличный игровой компьютер, который тянет все современные игры на ультра настройках. Спасибо команде Pc-tech маркет за проделанную работу и грамотные советы. Буду рекомендовать вас друзьям.</p>
            </SwiperSlide>

            <SwiperSlide className='swiper-card mb-[70px] bg-[#18171C] text-white rounded-md p-[20px]'>
            <div className='flex gap-3'>
              <div className='circle-photo  rounded-full w-[50px] h-[50px] overflow-hidden'>
                <img className='client-photo_img object-cover scale-105' src={clientsix} alt="" />
              </div>
              <h3 className='text-white'>Ирина<br/>Андреевна</h3>
              </div>
              <span className='w-full block h-[2px] my-3 bg-[#DC2626]'></span>
           
              <p>Спасибо команде Pc-tech за сборку моего нового компьютера! Всё прошло быстро и профессионально. Отдельная благодарность Константину за полезные советы и ребятам за аккуратную работу. Рекомендую!</p>
            </SwiperSlide>

            <SwiperSlide className='swiper-card bg-[#18171C] text-white rounded-md p-[20px]'>
            <div className='flex gap-3'>
              <div className='circle-photo  rounded-full w-[50px] h-[50px] overflow-hidden'>
                <img className='client-photo_img object-cover scale-150' src={clientseven} alt="" />
              </div>
              <h3 className='text-white'>Темур<br/>Жавлонов</h3>
              </div>
              <span className='w-full block h-[2px] my-3 bg-[#DC2626]'></span>
           
              <p>Долго искал компанию, которая могла бы собрать компьютер по моим требованиям, и рад, что нашёл Pc-tech маркет. Результат превзошёл все ожидания, а работа с проводами выполнена просто идеально.</p>
            </SwiperSlide>
           </Swiper>
           <div className="assembling-btns flex gap-5 justify-center mt-2">
            <div className="sales__button-prev flex justify-center items-center w-[40px] h-[40px] p480:w-[50px] p480:p-2 p480:h-[50px] cursor-pointer z-10">
              <span className='text-[35px] text-red-600'>&#8592;</span>
            </div>
            <div className="sales__button-next flex justify-center items-center w-[40px] h-[40px] p480:w-[50px] p480:p-2 p480:h-[50px] cursor-pointer z-10">
              <span className='text-[35px] text-red-600'>&#8594;</span>
            </div>
          </div>
       </div>
    </div>
  )
}
