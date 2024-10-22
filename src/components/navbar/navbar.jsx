import React, { useState } from 'react';
import './navbar.css';
import fon from '/src/assets/images/navbar-fon-2.png';
import logo from '/src/assets/images/logotip.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className='navbar h-[80px]'
      style={{
        backgroundImage: `url(${fon})`,
        backgroundSize: 'cover',
        opacity: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container relative h-full flex justify-between items-center px-[25px]">
        <div className='logo w-[50px] flex'>
          <img className='rounded-md' src={logo} alt="logo" />
          <div className='text-white ml-2 flex flex-col'>
            <span className='font-semibold'>TECH</span>
            <span className='w-full h-[3px] rounded-r-xl bg-red-600'></span>
            <span className='lg font-semibold'>Emporium</span>
          </div>
        </div>
        
        {/* Навигация для десктопа */}
        <ul className='text-white hidden gap-5 p768:flex'>
          <li><a href="#about">О нас</a></li>
          <li><a href="#service">Сервис</a></li>
          <li><a href="#blog">Блог</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>

        {/* Бургер-кнопка */}
        <div className="burger-btn absolute top-[5%] right-[2%] p768:hidden" onClick={toggleMenu}>
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
        </div>

        {/* Мобильная навигация */}
    
        <div className={`mobile-navigation fixed top-0 h-full w-full bg-black z-[50] p-10 flex flex-col gap-5 text-white transition-all duration-300 ${isOpen ? 'left-0' : 'left-[-100%]'}`}>
           <ul className='w-full h-full flex flex-col justify-center items-center gap-6'>
            <li><a href="#about" onClick={toggleMenu}>О нас</a></li>
            <li><a href="#service" onClick={toggleMenu}>Сервис</a></li>
            <li><a href="#blog" onClick={toggleMenu}>Блог</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Контакты</a></li>
           </ul>

           <div className="burger-btn absolute top-[2%] right-[2%] z-[99] p768:hidden" onClick={toggleMenu}>
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
        </div>
         
    
       
          </div>
     
      </div>
    </div>
  );
}
