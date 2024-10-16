import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import fon1 from '/src/assets/images/MSI-fon.png';
import fon2 from '/src/assets/images/AORUS-fon.jpg';
import fon3 from '/src/assets/images/ASUS-fon.jpg';
import fon4 from '/src/assets/images/ASROCK-fon.jpg';
import photo1 from '/src/assets/images/MSI.png';
import photo2 from '/src/assets/images/AORUS.png';
import photo3 from '/src/assets/images/ASUS.png';
import photo4 from '/src/assets/images/ASROCK.png';
import btn from '/src/assets/images/btnnextprev.png'
import { Pagination, Navigation } from 'swiper/modules';
import './Intro.css';

export default function Intro() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [opacity, setOpacity] = useState(0.25);
  const backgrounds = [fon1, fon2, fon3, fon4];

  const handleSlideChange = (swiper) => {
    setOpacity(0); 
    setTimeout(() => {
     
      const newActiveSlide = swiper.realIndex % backgrounds.length;
      setActiveSlide(newActiveSlide);
      setOpacity(0.25);
    }, 300);
  };
  const navigationButtons = {
    nextEl: '.sales__button-next',
    prevEl: '.sales__button-prev',
  };
  return (
    <div className='intro h-[800px] relative bg-black'>
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${backgrounds[activeSlide]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: opacity,
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className="absolute inset-x-0 top-0 bg-gradient-to-b from-black to-transparent"
        style={{ height: '50%' }} 
      />
      <div
         className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent"
        style={{ height: '40%' }}
      />


      <div className="container">
       <div className="swiper-con  ">
       <Swiper

slidesPerView={1}
spaceBetween={80}
navigation={navigationButtons}
loop={true}
onSlideChange={handleSlideChange}
modules={[Pagination, Navigation]}
className="mySwiper  relative "
>
<SwiperSlide className='swiper-card px-[20px] '>
  <div className='swiper-card__img-circle'></div>
  <div className='swiper-card__img-photos'><img src={photo1} alt="" /></div>
  <h3 className='text-white'>ASUS</h3>
  <span className='linear w-[70%] mt-2 h-[0.5px] bg-gray-100 block'></span>
  <p className='text-white  w-[70%] my-1'>Игровая материнская плата с расширенными возможностями разгона, она обеспечивает стабильную работу и высокую производительность для самых требовательных игр и приложений.</p>
</SwiperSlide>
<SwiperSlide className='swiper-card'>
  <div className='swiper-card__img-circle'></div>
  <div className='swiper-card__img-photos'><img src={photo2} alt="" /></div>
  <h3 className='text-white'>MSI</h3>
  <span className='linear w-[70%] mt-2 h-[0.5px] bg-gray-100 block'></span>
  <p className='text-white  w-[70%] my-1'>Известная своей надежностью, эта плата отлично подходит для геймеров, предлагая высокую производительность и качественную систему охлаждения для длительных игровых сессий.</p>
</SwiperSlide>
<SwiperSlide className='swiper-card'>
  <div className='swiper-card__img-circle'></div>
  <div className='swiper-card__img-photos'><img src={photo3} alt="" /></div>
  <h3 className='text-white'>AORUS</h3>
  <span className='linear w-[70%] mt-2 h-[0.5px] bg-gray-100 block'></span>
  <p className='text-white  w-[70%] my-1'>Профессиональная плата, разработанная для энтузиастов, с передовыми функциями и высококачественными компонентами, предлагающая непревзойденное качество и производительность для создания мощной игровой системы.</p>
</SwiperSlide>
<SwiperSlide className='swiper-card'>
  <div className='swiper-card__img-circle'></div>
  <div className='swiper-card__img-photos'><img src={photo4} alt="" /></div>
  <h3 className='text-white'>ASRock</h3>
  <span className='linear w-[70%] mt-2 h-[0.5px] bg-gray-100 block'></span>
  <p className='text-white w-[70%] my-1'>Многофункциональная материнская плата, идеально подходящая для построения универсальной системы, от игр до работы с графикой, с отличной поддержкой новейших технологий.</p>
</SwiperSlide>

   <div className="sales__button-prev flex justify-center items-center  w-[40px] h-[40px] p-1   p480:w-[50px] p480:p-2  p480:h-[50px] border border-red-950 rounded-full text-white absolute bottom-[10px] right-[70px]  p480:right-[80px] cursor-pointer z-10">
   <img className='btn-prev transform scale-x-[-1]' src={btn} alt="" />
   </div>

    <div className="sales__button-next flex justify-center items-center w-[40px] h-[40px] p-1   p480:w-[50px] p480:p-2  p480:h-[50px] border border-red-950 rounded-full text-white absolute bottom-[10px] right-[15px]    p480:right-[20px] cursor-pointer z-10">
<img className='btn-next' src={btn} alt="" />
    </div>

</Swiper>
       </div>
       
      </div>
    </div>
  );
}
