// Client.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import ClientCard from './components/card'; // Импортируем компонент карточки
import { clientsData } from './data/client'; // Импортируем данные

export default function Client() {
  const navigationButtons = {
    nextEl: '.sales__button-next',
    prevEl: '.sales__button-prev',
  };

  return (
    <div className="clients bg-gradient-to-r px-2 from-[#1B2838] to-[#2A3F54] mt-[-10px] py-[50px]" id="about">
      <div className="container relative">
        <h2 className="text-white text-center text-[40px] my-2">Отзыв клиентов</h2>
        <Swiper
          slidesPerView={1}
          pagination={{ type: 'fraction' }}
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
          modules={[Navigation]}
          className="MySwiperTwo mt-10"
        >
          {clientsData.map((client, index) => (
            <SwiperSlide key={index}>
              <ClientCard name={client.name} image={client.image} text={client.text} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="assembling-btns flex gap-5 justify-center mt-2">
          <div className="sales__button-prev flex justify-center items-center w-[40px] h-[40px] p480:w-[50px] p480:p-2 p480:h-[50px] cursor-pointer z-10">
            <span className="text-[35px] text-white">&#8592;</span>
          </div>
          <div className="sales__button-next flex justify-center items-center w-[40px] h-[40px] p480:w-[50px] p480:p-2 p480:h-[50px] cursor-pointer z-10">
            <span className="text-[35px] text-white">&#8594;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
