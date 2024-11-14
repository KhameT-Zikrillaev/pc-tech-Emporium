import React, { useState, useRef, useEffect } from 'react';
import introimages from '../../../../assets/images/introimages.png';

export default function AnimatedIntro() {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (isHovered && imageRef.current && containerRef.current) {
      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      const imageRect = imageRef.current.getBoundingClientRect();

      const offsetX = clientX - rect.left - imageRect.width / 2;
      const offsetY = clientY - rect.top - imageRect.height / 2;

      const radius = 50;
      const distance = Math.min(Math.sqrt(offsetX ** 2 + offsetY ** 2), radius);
      const angle = Math.atan2(offsetY, offsetX);
      const constrainedX = distance * Math.cos(angle);
      const constrainedY = distance * Math.sin(angle);

      imageRef.current.style.transform = `translate(${constrainedX}px, ${constrainedY}px)`;
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(resetImagePosition, 150);
  };

  const resetImagePosition = () => {
    if (imageRef.current) {
      imageRef.current.style.transition = 'transform 0.5s ease-out';
      imageRef.current.style.transform = 'translate(0, 0)';
    }
  };

  useEffect(() => {
    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

  return (
    <div className="bg-gradient-to-r from-[#1B2838] to-[#2A3F54] pt-20 p768:pt-24 pb-20 p768:pb-36 relative overflow-hidden">
      <div className="container mx-auto  px-2 p480:px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12 relative">
          
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col justify-center text-white space-y-6 p480:px-4 lg:items-start items-center relative z-10">
            <h2 className="text-lg font-semibold text-indigo-400 tracking-widest uppercase">
              Надежность и качество
            </h2>
            <h1 className="text-3xl p768:text-5xl font-bold leading-tight text-shadow-lg text-white text-center lg:text-left">
              Ремонт и заправка картриджей для принтеров
            </h1>
            <p className="text-md text-gray-300 leading-relaxed max-w-md text-center lg:text-left">
  Предлагаем качественный ремонт принтеров, компьютеров, моноблоков и другой офисной техники, а также заправку картриджей с гарантией.
</p>
            <div className="flex space-x-4 mt-4">
              <button className="bg-indigo-500 text-[12px] p480:text-[16px] bg-opacity-20 text-indigo-300 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-40 transition duration-300 transform hover:scale-105">
                Заказать ремонт
              </button>
              <button className="border-2 text-[12px] p480:text-[16px] border-indigo-400 text-indigo-300 py-3 px-8 rounded-lg hover:bg-indigo-400 hover:text-white transition duration-300 transform hover:scale-105">
                Узнать подробнее
              </button>
            </div>
          </div>

          {/* Right Image with Hover Effect */}
          <div
            className="lg:w-1/2 flex cursor-pointer justify-center items-center relative overflow-hidden rounded-2xl shadow-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
            style={{
              position: 'relative',
              width: '450px', // Ограничиваем ширину контейнера
              height: '450px', // Ограничиваем высоту контейнера
            }}
          >
            <img
              src={introimages}
              alt="Ремонт принтеров и заправка картриджей"
              className="w-full rounded-2xl transition-all duration-500 ease-in-out absolute"
              ref={imageRef}
              style={{
                transition: 'transform 0.5s ease-out', // Плавный переход при возвращении
                pointerEvents: 'none', // Чтобы не мешать взаимодействию с другими элементами
              }}
            />
          </div>

        </div>
      </div>

      {/* Animated Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[300px] h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform rotate-45 -top-20 -left-20 animate-line"></div>
        <div className="absolute w-[300px] h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform -rotate-45 -bottom-20 right-20 animate-line"></div>
        <div className="absolute w-[300px] h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform rotate-45 top-1/2 -left-32 animate-line"></div>
      </div>

      <style>{`
        .animate-line {
          animation: moveLine 4s ease-in-out infinite;
        }
        @keyframes moveLine {
          0%, 100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(20px) rotate(45deg);
          }
        }
      `}</style>
    </div>
  );
}
