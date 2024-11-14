import React from 'react';
import banner from '/src/assets/images/fourthbanner.png';
import bannerprinter from '/src/assets/images/fourthbannerprint.png';

export default function FourthBanner() {
  return (
    <div className="fourthbanner relative  flex items-center justify-center bg-gradient-to-r from-[#1B2838] to-[#2A3F54] py-10 p480:py-[0px] p480:h-screen">
      {/* Левое абстрактное изображение с размытие фона */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden blur-md">
      <img 
    className=" p480:w-[60%]  mt-[5vh] p480:mt-[20vh] mb-[20vh] opacity-80 mix-blend-multiply" 
    src={banner} 
    alt="Abstract Banner" 
  />
      </div>

      {/* Текстовый блок поверх абстрактного фона */}
      <div className="relative z-10 text-center px-6 py-8 md:py-16 md:px-12">
      <h1 className="text-2xl p480:text-3xl md:text-6xl font-bold text-white mb-4 text-outline">
      Ремонт Plotter принтеров <br/> с гарантией качества!
    </h1>
    <p className="text-md px-2  p480:text-lg md:text-xl text-white leading-relaxed text-outline">
      Мы обеспечим надежный ремонт и обслуживание вашего Plotter принтера, чтобы он снова работал как новый.
    </p>
      </div>

      {/* Правое изображение принтера с улучшенной видимостью */}
      <div className="absolute right-0 top-0 p768:w-1/2 h-full flex items-center p768:justify-end">
        <img 
          className="object-contain h-3/4 lg:h-full pr-8 lg:pr-12 hidden p480:flex shadow-xl rounded-md" 
          src={bannerprinter} 
          alt="Printer" 
        />
      </div>
    </div>
  );
}
