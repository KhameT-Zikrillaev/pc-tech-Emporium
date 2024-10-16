import React, { useEffect, useRef, useState } from 'react';
import './topcomping.css';
import toppcfon from '/src/assets/images/top-pk-fon.jpg';
import toppc from '/src/assets/images/top-pc.png';
import fonsticky from '/src/assets/images/fon-stick.jpg';
export default function TopComping() {
  const progressBarsRef = useRef([]);
  const [progressHeights, setProgressHeights] = useState([0, 0, 0, 0, 0, 0]); // Изначальные высоты прогресс-баров
  const progressValues = [40, 70, 45, 30, 55, 50]; // Значения для прогресс-баров
  const progressLabels = ['Performance', 'Rendering', 'Gaming', 'Desktoping', 'Editing', 'Streaming']; // Названия для прогресс-баров
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // 10% видимости для активации
    );

    if (progressBarsRef.current[0]) {
      observer.observe(progressBarsRef.current[0]); // Начнём наблюдение за первым элементом
    }

    return () => {
      if (progressBarsRef.current[0]) {
        observer.unobserve(progressBarsRef.current[0]); // Остановим наблюдение при размонтировании
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgressHeights((prevHeights) =>
          prevHeights.map((height, index) =>
            height < progressValues[index] ? height + 1 : height
          )
        );
      }, 30); // Измените интервал, чтобы увеличить скорость анимации

      return () => clearInterval(interval); // Удаляем интервал при размонтировании
    } else {
      // Сброс высоты прогресс-баров, когда компонент не виден
      setProgressHeights([0, 0, 0, 0, 0, 0]);
    }
  }, [isVisible]);

  return (
    <div className='topcomping bg-black relative  h-[900px] p768:h-[700px]'>
      <img className='d opacity-5 absolute right-0 h-[700px] object-cover' src={toppcfon} alt="" />
      <h2 className="text-white  pt-4 text-center text-[24px] p768:text-[36px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-red-600 to-orange-700 bg-clip-text text-transparent drop-shadow-xl">
        Продвинутый ПК
      </h2>
      <div className="container px-2 w-full h-[900px] p768:h-[700px] flex flex-col p768:flex-row items-center justify-around">
        <img className='h-[35%] mt-[-100px] p768:mt-0 mx-auto p992:h-[75%]' src={toppc} alt="" />

        <div className="topcomping-right flex flex-col justify-end h-[300px] mt-[-200px] p768:mt-0  p768:h-[400px]">
          <div className="progress-info gap-1 p480:gap-2 p992:gap-6 flex mx-auto">
            {progressValues.map((value, index) => (
              <div
                key={index}
                className="progress-bar flex flex-col items-center"
                ref={el => progressBarsRef.current[index] = el}
              >
                <span className='text-white text-[12px] p992:text-[16px] mt-auto'>+{progressHeights[index]}%</span>
                <div className="bar w-[30px] mt-2" style={{ height: `${progressHeights[index]}px` }}></div>
                <h4 className='text-white mt-1 text-[10px] p480:text-[12px]'>{progressLabels[index]}</h4>
              </div>
            ))}
          </div>

          <h4 className='text-[#e9b300] text-center font-semibold mt-4  text-[25px] p480:text-[30px]'>Ryzen Threadripper PRO 7995WX</h4>
          <h5 className='text-[#a14cb3] text-center font-semibold mt-1  text-[18px] p480:text-[25px]'>VIPER FROZEN EXTREME</h5>
          <ul  className='compint-info'>
            <li>CPU  96/192</li>
            <li>DDR5 6000MHZ 256GB</li>
            <li>RTX 4090 24GB/384BIT 2X</li>
          </ul>
        </div>
      </div>
      <div className="curved-bottom__top"></div>
     <img  className='fixed h-full top-0 left-0 w-full object-cover z-[-1]' src={fonsticky} alt="" />
     <div className="curved-bottom__bottom"></div>
    </div>
  );
}
