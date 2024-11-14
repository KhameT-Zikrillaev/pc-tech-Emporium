import React, { useEffect, useState, useRef } from 'react';
import images from '/src/assets/images/fixed-fon.jpg';
import datainfo from './data/fifthininfoclent';
import Card from './components/card';

export default function FifthInfoclient() {
  const [counts, setCounts] = useState(datainfo);
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

          setCounts((prevCounts) =>
            prevCounts.map((item, index) => ({
              ...item,
              count: Math.floor(targets[index] * progress),
            }))
          );

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
    <div className='fifthinfoclient relative overflow-hidden ' ref={ref}>
      <img
        className='fixed w-full h-full top-0 left-0 z-[-1] object-cover'
        src={images}
        alt="Background"
      />
      <div className="container relative z-10 py-6">
        <div className="flex flex-wrap justify-center items-center gap-2 text-gray-800">
        {counts.map((item, index) => (
            <Card 
              key={index} 
              label={item.label} 
              count={item.count} 
              description={item.description} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
