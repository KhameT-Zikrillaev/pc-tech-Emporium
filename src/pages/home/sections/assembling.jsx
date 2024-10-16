import React, { useState, useEffect, useRef } from 'react';
import './assembling.css';
import Progress from '../../../components/progress/progress';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Comp1 from '/src/assets/images/Comp-1.png';
import Comp2 from '/src/assets/images/Comp-2.png';
import Comp3 from '/src/assets/images/Comp-3.png';
import Comp4 from '/src/assets/images/Comp-4.png';
import Comp5 from '/src/assets/images/Comp-5.png';
import icon1 from '/src/assets/images/corpuse-icon.svg';
import icon2 from '/src/assets/images/processor-icon.svg';
import icon3 from '/src/assets/images/memory-icon.svg';
import icon4 from '/src/assets/images/videocard-icon.svg';
import icon5 from '/src/assets/images/nmve-icon.svg';
import icon6 from '/src/assets/images/hdd-icon.svg';
import icon7 from '/src/assets/images/blokbg-icon.svg';
import icon8 from '/src/assets/images/cooler-icon.svg';

export default function Assembling() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressData, setProgressData] = useState({ game: 0, desktop: 0, montage: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  const assemblies = [
    {
      game: 80,
      desktop: 75,
      montage: 73,
      image: Comp1,
      title: "Mansore MegaTrons",
      items: [
        { icon: icon1, description: 'Cougar cenquere 2' },
        { icon: icon2, description: 'Ryzen 3900X 12/24' },
        { icon: icon3, description: 'DDR4 T-Force Hawker RGBA 2x16. 32GB' },
        { icon: icon4, description: 'RTX3080 VENTUS MSI 8GB 256BIT' },
        { icon: icon5, description: 'NMVE.M2 990PRO. 1TB 7500+ speed' },
        { icon: icon6, description: 'HDD RED. 4TB Seagate' },
        { icon: icon7, description: 'ZALMAN GOLD+  850W.' },
        { icon: icon8, description: 'Corsair iCUE H100i RGB Pro XT' }
      ]
    },
    {
      game: 97,
      desktop: 97,
      montage: 94,
      image: Comp2,
      title: "Moon Mercury",
      items: [
        { icon: icon1, description: 'Cooler Master COSMOS' },
        { icon: icon2, description: 'Intel Core i9-14900K 24/32' },
        { icon: icon3, description: 'DDR5 Vengeance RGBA 4x16. 64GB' },
        { icon: icon4, description: 'RTX4070 ZOTAC 12GB 256BIT. 2X' },
        { icon: icon5, description: 'NMVE.M2 990PRO. 2TB 7500+ speed' },
        { icon: icon6, description: 'HDD RED. 4TB Seagate. 2X' },
        { icon: icon7, description: 'ZALMAN GOLD+  1000W.' },
        { icon: icon8, description: 'NZXT Kraken X73' }
      ]
    },
    {
      game: 74,
      desktop: 71,
      montage: 59,
      image: Comp3,
      title: "Predator Game",
      items: [
        { icon: icon1, description: 'Cougar Intros Cratus' },
        { icon: icon2, description: 'Intel Core i7-13700K 16/24' },
        { icon: icon3, description: 'DDR4 Kingstone RGBA 2x16. 32GB' },
        { icon: icon4, description: 'RTX3070 ZOTAC 12GB 256BIT.' },
        { icon: icon5, description: 'NMVE.M2 980PRO. 1TB 7000+ speed' },
        { icon: icon6, description: 'HDD RED. 2TB Seagate' },
        { icon: icon7, description: 'Corsair silver+ 850W.' },
        { icon: icon8, description: 'Noctua NH-D15' }
      ]
    },
    {
      game: 78,
      desktop: 80,
      montage: 60,
      image: Comp4,
      title: "Alive Pro",
      items: [
        { icon: icon1, description: 'Deepcool Matrexx 70' },
        { icon: icon2, description: 'Intel Core i7-13700K 16/24' },
        { icon: icon3, description: 'DDR4 G.Skill Trident Z RGB 2x16. 32GB' },
        { icon: icon4, description: 'RTX3080 EVGA VENTUS 8GB 256BIT.' },
        { icon: icon5, description: 'NMVE.M2 980PRO. 1TB 7000+ speed' },
        { icon: icon6, description: 'HDD RED. 2TB Seagate' },
        { icon: icon7, description: 'Evga Gold+  850W.' },
        { icon: icon8, description: 'Corsair H115i Elite Capellix' }
      ]
    },
    {
      game: 68,
      desktop: 70,
      montage: 50,
      image: Comp5,
      title: "INFINIIE MASK",
      items: [
        { icon: icon1, description: 'MSI INFINITE' },
        { icon: icon2, description: 'Ryzen 5700G 8/16' },
        { icon: icon3, description: 'DDR4 HyperX Fury RGB 2x16. 32GB' },
        { icon: icon4, description: 'RTX3070 GIGABYTE 8GB 256BIT.' },
        { icon: icon5, description: 'NMVE.M2 980PRO. 1TB 7000+ speed' },
        { icon: icon6, description: 'HDD RED. 2TB Seagate' },
        { icon: icon7, description: 'Deep Cool Gold+ 750W.' },
        { icon: icon8, description: 'ARCTIC Liquid Freezer II 280' }
      ]
    }
  ];

  useEffect(() => {

    setProgressData({
      game: assemblies[currentSlide].game,
      desktop: assemblies[currentSlide].desktop,
      montage: assemblies[currentSlide].montage,
    });
  }, [currentSlide]);



  const handleScroll = () => {
    if (progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };
  const navigationButtons = {
    nextEl: '.sales__button-next',
    prevEl: '.sales__button-prev',
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='assembling bg-black'>
      <h2 className="text-white text-center text-[24px] p768:text-[36px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-red-600 to-orange-700 bg-clip-text text-transparent drop-shadow-xl">
        Готовые сборки ПК
      </h2>
      <div className="container relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={80}
          navigation={navigationButtons}
          loop={false}
          modules={[Pagination, Navigation]}
          className="mySwiper relative"
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        >
          {assemblies.map((assembly, index) => (
            <SwiperSlide className='swiper-card px-[20px]' key={index}>
              <h4 className="assembling-title-mobile">{assembly.title}</h4>
              <div className='flex flex-col-reverse p768:flex-row justify-center gap-10' ref={progressRef}>
                <Progress 
                  game={isVisible ? progressData.game : 0} 
                  desktop={isVisible ? progressData.desktop : 0} 
                  montage={isVisible ? progressData.montage : 0} 
                />
                <div className='h-[250px] p480:h-[400px] p768:h-[500px] p1024:h-[400px] overflow-hidden rounded-[20px] relative'>
                  <img
                    src={assembly.image}
                    alt={assembly.title}
                    className="h-full w-full object-contain rounded-[20px]"
                  />
                </div>
              </div>
              <h4 className="assembling-title">{assembly.title}</h4>
              <ul className='text-white grid grid-cols-1 p480:grid-cols-2 justify-items-center mx-auto gap-4 mt-10'>
                {assembly.items.map((item, itemIndex) => (
                  <li className='flex gap-2 items-center' key={itemIndex}>
                    <img className='w-[25px]' src={item.icon} alt="" />{item.description}
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="assembling-btns flex gap-5 justify-center mt-2">
            <div onClick={() => setCurrentSlide(currentSlide )} className="sales__button-prev flex justify-center items-center w-[40px] h-[40px] p480:w-[50px] p480:p-2 p480:h-[50px] cursor-pointer z-10">
              <span className='text-[35px] text-red-600'>&#8592;</span>
            </div>
            <div onClick={() => setCurrentSlide(currentSlide )} className="sales__button-next flex justify-center items-center w-[40px] h-[40px] p480:w-[50px] p480:p-2 p480:h-[50px] cursor-pointer z-10">
              <span className='text-[35px] text-red-600'>&#8594;</span>
            </div>
          </div>
      </div>
    </div>
  );
}
