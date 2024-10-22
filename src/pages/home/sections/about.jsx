import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const targets = [10, 20000, 5000];
  const duration = 2000; // общее время анимации
  const ref = useRef(null);

  const handleScroll = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let startTime;
        const updateCounts = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const elapsedTime = timestamp - startTime;
          const progress = Math.min(elapsedTime / duration, 1);

          setCount1(Math.floor(targets[0] * progress));
          setCount2(Math.floor(targets[1] * progress));
          setCount3(Math.floor(targets[2] * progress));

          if (progress < 1) {
            requestAnimationFrame(updateCounts);
          }
        };

        requestAnimationFrame(updateCounts);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className='about bg-black text-white py-[50px] mt-[580px] p768:mt-[600px]' ref={ref}>
      <div className="container px-2">
        <div className="flex flex-wrap p768:flex-nowrap justify-center p768:justify-between items-center">
          <div className="card-grid flex flex-col gap-3">
            <div className="card-grid-items flex flex-col items-center">
              <h2 className='text-center font-[Furore] font-normal text-[40px]'>{count1}</h2>
              <h3 className='text-center font-[Furore] font-normal text-[22px] mb-2'>ЛЕТ НА РЫНКЕ</h3>
              <p className='max-w-[300px] w-full text-center mx-auto p768:h-[110px] mb-2'>Являемся лидером, с огромным опытом на рынке игровых компьютеров</p>
            </div>
          </div>

          <span className='linear w-[80%] h-[1px] p480:w-[1px] p480:h-[100px] m-2 p480:hidden p768:flex'></span>

          <div className="card-grid flex flex-col gap-3">
            <div className="card-grid-items flex flex-col items-center">
              <h2 className='text-center font-[Furore] font-normal text-[40px]'>{count2}</h2>
              <h3 className='text-center font-[Furore] font-normal text-[22px] mb-2'>КОМПЬЮТЕРОВ</h3>
              <p className='max-w-[300px] w-full text-center mx-auto p768:h-[110px] mb-2'>Произвели более 20 000 уникальных компьютеров для наших клиентов</p>
            </div>
          </div>

          <span className='linear w-[80%] h-[1px] p480:w-[1px] p480:h-[100px] m-2 p480:hidden p768:flex'></span>

          <div className="card-grid flex flex-col gap-3">
            <div className="card-grid-items">
              <h2 className='text-center font-[Furore] font-normal text-[40px]'>{count3}</h2>
              <h3 className='text-center font-[Furore] font-normal text-[22px] mb-2'>ОТЗЫВОВ</h3>
              <p className='max-w-[300px] w-full text-center mx-auto p768:h-[100px] mb-2'>Более 5 000 положительных отзывов на различных площадках</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
