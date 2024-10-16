import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './progress.css';

const Progress = ({ game, desktop, montage, onAnimate }) => {
  const [NumbProgressGames, setNumbProgressGames] = useState(0);
  const [NumbProgressDesktop, setNumbProgressDesktop] = useState(0);
  const [NumbProgressMontage, setNumbProgressMontage] = useState(0);

  // Функция для анимации прогресса
  const animateProgress = (setProgress, target) => {
    let progress = 0;
    const increment = target / 100;

    const interval = setInterval(() => {
      if (progress < target) {
        progress += increment;
        setProgress(Math.min(Math.floor(progress), target));
      } else {
        clearInterval(interval);
      }
    }, 30);
  };

  useEffect(() => {
    // Сбрасываем значения прогресса в 0 перед анимацией
    setNumbProgressGames(0);
    setNumbProgressDesktop(0);
    setNumbProgressMontage(0);

    // Анимируем прогресс до целевых значений
    animateProgress(setNumbProgressGames, game);
    animateProgress(setNumbProgressDesktop, desktop);
    animateProgress(setNumbProgressMontage, montage);
  }, [game, desktop, montage]);

  // Обработка анимации при вызове из Assembling
  const handleAnimate = () => {
    animateProgress(setNumbProgressGames, game);
    animateProgress(setNumbProgressDesktop, desktop);
    animateProgress(setNumbProgressMontage, montage);
  };

  useEffect(() => {
    if (onAnimate) {
      onAnimate(handleAnimate); // Передаем функцию анимации
    }
  }, [onAnimate]);

  const getColor = (value) => {
    if (value < 30) {
      return '#e74c3c'; // Красный
    } else if (value < 70) {
      return '#f1c40f'; // Желтый
    } else if (value < 80) {
      return '#2ecc71'; // Зеленый
    } else {
      return '#3498db'; // Синий
    }
  };

  return (
    <div className="progress-con mx-auto p768:mx-0  p-1 p768:p-4  shadow-lg bg-opacity-0 flex flex-col gap-6">
      {/* Круговой прогресс-бар для игр */}
      <div className='progress-games flex items-center gap-3'>
        <h4 className='text-white w-[120px] '>Для игр</h4>
        <div className=' w-[50px] h-[50px]  p480:w-[100px] p480:h-[100px]'>
          <CircularProgressbar 
            value={NumbProgressGames} 
            text={`${NumbProgressGames}%`} 
            styles={buildStyles({
              textColor: getColor(NumbProgressGames),
              pathColor: getColor(NumbProgressGames),
              trailColor: '#d6d6d6',
              textSize: '25px',
            })}
          />
        </div>
      </div>

      {/* Круговой прогресс-бар для десктопа */}
      <div className='progress-desktop flex items-center gap-3'>
        <h4 className='text-white w-[120px] '>Для Прочее</h4>
        <div className=' w-[50px] h-[50px]  p480:w-[100px] p480:h-[100px]'>
          <CircularProgressbar 
            value={NumbProgressDesktop} 
            text={`${NumbProgressDesktop}%`} 
            styles={buildStyles({
              textColor: getColor(NumbProgressDesktop),
              pathColor: getColor(NumbProgressDesktop),
              trailColor: '#d6d6d6',
              textSize: '25px',
            })}
          />
        </div>
      </div>

      {/* Круговой прогресс-бар для монтажа */}
      <div className='progress-montage flex items-center gap-3'>
        <h4 className='text-white w-[120px] '>Для Монтаж</h4>
        <div className=' w-[50px] h-[50px]  p480:w-[100px] p480:h-[100px]'>
          <CircularProgressbar 
            value={NumbProgressMontage} 
            text={`${NumbProgressMontage}%`} 
            styles={buildStyles({
              textColor: getColor(NumbProgressMontage),
              pathColor: getColor(NumbProgressMontage),
              trailColor: '#d6d6d6',
              textSize: '25px',
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Progress;
