import React from 'react'
import './navbar.css'
import fon from '/src/assets/images/navbar-fon-2.png'
import logo from '/src/assets/images/logotip.png'
export default function Navbar() {
  return (
    <div className='navbar h-[80px]'  style={{
      backgroundImage: `url(${fon})`,
      backgroundSize: 'cover',
      opacity: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
       <div className="container h-full flex  justify-between items-center px-[25px]">
        <div className='logo w-[50px] flex'>
          <img className='rounded-md' src={logo} alt="" />
          <div className='text-white ml-2 flex flex-col'>
            <span className='font-semibold'>TECH</span>
             <span className='w-full h-[3px] rounded-r-xl bg-red-600'></span>
            <span className='lg font-semibold'>Emporium</span>
            </div>
        </div>
        
        <ul className='text-white flex gap-5'>
            <li><a href="">О нас</a></li>
            <li><a href="">Сервис</a></li>
            <li><a href="">Блог</a></li>
            <li><a href="">Контакты</a></li>
        </ul>
       </div>
    </div>
  )
}
