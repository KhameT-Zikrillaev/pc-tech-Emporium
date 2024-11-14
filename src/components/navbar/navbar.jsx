import React, { useState, useEffect } from 'react';
import './navbar.css';



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Проверяем прокрутку
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div
      className={`navbar border-r-emerald-700 h-[80px] ${isScrolled ? 'navbar-active' : ''} bg-gradient-to-r from-[#1B2838] to-[#2A3F54] `}
    >
      <div className="container relative h-full flex justify-between items-center px-[25px]">
        <a href="/">
        <div className='logo w-[50px] flex'>
          {/* <img className='rounded-md' src={logo} alt="logo" /> */}
          
          <div className='text-black ml-2 flex flex-col'>
            <span className='font-semibold'>LOGO</span>
          </div>
        </div>
        </a>
        {/* Навигация для десктопа */}
        <ul className='text-zinc-300 hidden gap-5 p768:flex p768:items-center'>
          <li className="hover:scale-105  hover:font-bold font-medium transition-all duration-300"><a href="/about">О нас</a></li>
          <li className="hover:scale-105  hover:font-bold font-medium transition-all duration-300"><a href="/uslug">Услуги</a></li>
          <li className="hover:scale-105  hover:font-bold font-medium transition-all duration-300"><a href="/brand">Продажа и Бренды</a></li>
          <li className="hover:scale-105  hover:font-bold font-medium transition-all duration-300"><a href="/">Главная</a></li>
          <li className="border-2 rounded-md border-indigo-500 px-4 py-1 text-white transform transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#1B2838] to-[#2A3F54] hover:text-white hover:scale-105 hover:shadow-lg">
  <a href="/mastercall">Вызвать мастера</a>
</li>
        </ul>

        {/* Бургер-кнопка */}
        <div className="burger-btn absolute top-[20%] right-[2%] p768:hidden" onClick={toggleMenu}>
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
        </div>

        {/* Мобильная навигация */}
        <div className={`mobile-navigation fixed top-0 h-[100dvh] w-[60%] p480:w-[55%] p768:hidden bg-gradient-to-r from-[#1B2838] to-[#2A3F54] z-[50] py-10 pr-4 flex flex-col gap-5 text-white transition-all duration-300 ${isOpen ? 'right-0' : 'right-[-100%]'}`}>
          <ul className='w-full h-full flex flex-col  items-end gap-6 text-[18px] mt-4'>
            <li><a href="/about" onClick={toggleMenu}>О нас</a></li>
            <li><a href="/uslug" onClick={toggleMenu}>Услуги</a></li>
            <li><a href="/brand">Продажа и Бренды</a></li>
            <li><a href="/" onClick={toggleMenu}>Главная</a></li>
            <li className='border-2 border-indigo-500 py-4 px-[14px]  p480:py-[11px] p480:px-[28px] rounded-lg'><a href="/mastercall" onClick={toggleMenu}>Вызвать мастера</a></li>
          </ul>

          {/* Повторная бургер-кнопка */}
          <div className="burger-btn absolute top-[2%] right-4 z-[99] p768:hidden" onClick={toggleMenu}>
            <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
          </div>
        </div>
      </div>
    </div>
  );
}