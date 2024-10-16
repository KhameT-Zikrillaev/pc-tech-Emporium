import React, { useState, useRef } from 'react';
import './corpuse.css';
import pc from '/src/assets/images/comp-corpus-2.png';
import aorus from '/src/assets/images/aorus-vg.png';
import msi from '/src/assets/images/msi-vg.png';
import asus from '/src/assets/images/asus-vg.png';
import giga from '/src/assets/images/giga-vg.png';
import fonvg from '/src/assets/images/fonvg.webp';

export default function Corpuse() {
  const [activeImageOne, setActiveImageOne] = useState(aorus);
  const [activeImageTwo, setActiveImageTwo] = useState(aorus);
  const [isMoved, setIsMoved] = useState(false);
  const [isMoved2, setIsMoved2] = useState(false);
  const [activeButton, setActiveButton] = useState(aorus);
  const [model, setModel] = useState("AOURUS VENTUS 3FAN 8GB"); // Состояние для модели
  const timeoutRef = useRef(null); // Используем useRef для хранения таймера

  const handleImageChange = (image, modelName) => {
    // Если таймер активен, сбрасываем его
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }


    if (activeButton === image) return;

    setActiveButton(image); 
    setActiveImageOne(image); 
    setIsMoved(true);
    setIsMoved2(false); 
    setModel(modelName);

  
    timeoutRef.current = setTimeout(() => {
      setIsMoved(false);
      setActiveImageTwo(image);
      setIsMoved2(true);
      timeoutRef.current = null;
    }, 1000);
  };

  return (
    <div style={{
        backgroundImage: `url(${fonvg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)', 
      }}></div>
      <div
        className="absolute inset-x-0 top-0 bg-gradient-to-b from-black to-transparent"
        style={{ height: '40%' }}
      />
      <div
         className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent"
        style={{ height: '20%' }} 
      />
      <div className="container relative z-10 flex flex-col">
        <h2 className='title-corpus text-red-700 absolute z-20 text-[32px] mx-auto left-[50%] top-[-40px] transform translate-x-[-50%] p992:top-[40%] p992:left-[10%]'>
          Видеокарты
        </h2>
        <div className='p992:w-[400px] absolute z-20 mx-auto left-[50%] top-[10px] p480:top-[5px] transform translate-x-[-50%] p992:top-[46%] p992:left-[20%] p1200:left-[19%]'>
        <h3 className='title-corpus text-white text-[16px] p768:text-[24px]  text-center p992:text-start'>
        {model}
        </h3>
        </div>
        
        <div className='blur'></div>
        <div className="corpuse-con object-cover z-10 relative h-[600px] overflow-hidden w-full mx-auto">
          <div className='max-w-[800px] object-cover overflow-hidden relative w-full h-[600px] mx-auto'>
            <img src={pc} className="absolute w-full h-full object-cover p480:left-[-20px] top-[15px]" alt="" />
          </div>

          <img 
            src={activeImageOne} 
            className={`active-image  ${isMoved ? 'active' : ''}`} 
            alt="" 
          />
          
          <img 
            src={activeImageTwo} 
            className={`active-image2 ${isMoved2 ? 'active2' : ''}`} 
            alt="" 
          /> 
        </div>

        <div className="corpuse-con-btns mx-auto py-[20px]  flex  gap-4">
          <button 
            onClick={() => handleImageChange(aorus, "AOURUS VENTUS 3FAN 8GB")} 
            style={{ color: activeButton === aorus ? 'red' : 'white' }}
          >
            AORUS
          </button>
          <button 
            onClick={() => handleImageChange(msi, "MSI GAMING PRO 8GB")} 
            style={{ color: activeButton === msi ? 'red' : 'white' }}
          >
            MSI
          </button>
          <button 
            onClick={() => handleImageChange(asus, "ASUS Gaming X Trio 12GB")} 
            style={{ color: activeButton === asus ? 'red' : 'white' }}
          >
            ASUS
          </button>
          <button 
            onClick={() => handleImageChange(giga, "GIGABYTE AVENTUS 3X TRIO")} 
            style={{ color: activeButton === giga ? 'red' : 'white' }}
          >
            GIGA
          </button>
        </div>
      </div>
    </div>
  );
}
