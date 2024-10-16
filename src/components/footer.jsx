import React from 'react'
import './footer.css'
import logo from '/src/assets/images/logotip.png'
import ryzen from '/src/assets/images/ryzen-logo.webp'
import intel from '/src/assets/images/intel-logo.png'
import redeon from '/src/assets/images/redeon-logo.png'
import nvidia from '/src/assets/images/nvidia-logo.png'
import telegram from '/src/assets/images/telegram-icon.svg'
import instagram from '/src/assets/images/instagram-icon.svg'
import facebook from '/src/assets/images/facebook-icon.svg'
import email from '/src/assets/images/email-icon.svg'
export default function Footer() {
  return (
    <div className='footer bg-black pt-10'>
     <div className="container  text-white grid px-3  p480:grid-cols-2 p992:grid-cols-3 gap-5 ">


      <div className="block-one">
      <div className='logo w-[80px] flex '>
          <img className='rounded-md' src={logo} alt="" />
          <div className='text-white ml-2 flex flex-col'>
            <span className='font-semibold text-[25px]'>TECH</span>
             <span className='w-full h-[3px] rounded-r-xl bg-red-600'></span>
            <span className='lg font-semibold text-[25px]'>Emporium</span>
            </div>
      </div>
        <p className='text-[16px] mt-4 text-center p480:text-start'>Интернет-магазин компьютерной техники и комплектующих
        Официальный партнер:</p>
        <div className="logo-con mt-3 w-full grid grid-cols-2 gap-2">
          <a href="" className='w-[100px] mx-auto p480:mx-0'><img className='' src={ryzen} alt="" /></a>
          <a href="" className='w-[100px] mx-auto p480:mx-0'><img className='' src={intel} alt="" /></a>
          <a href="" className='w-[100px] mx-auto p480:mx-0 mt-2'><img className='' src={redeon} alt="" /></a>
          <a href="" className='w-[100px] mx-auto p480:mx-0'><img className='' src={nvidia} alt="" /></a>
        </div>

      </div>
      <div className="block-two text-white ">
        <ul className=' flex flex-col gap-3 text-[16px] text-center p480:text-start ' >
          <li className='text-[25px] text-red-600 font-semibold'>Разделы</li>
          <li><a className='hover:hover:text-red-600' href="">О компании</a></li>
          <li><a className='hover:hover:text-red-600' href="">Блог</a></li>
          <li><a className='hover:hover:text-red-600' href="">Сервис</a></li>
          <li><a className='hover:hover:text-red-600' href="">Продвинутый пк</a></li>
          <li><a className='hover:hover:text-red-600' href="">Видеокарты</a></li>
        </ul>
      </div>
      <div className="block-three text-white ">
        <ul className=' flex flex-col gap-3 text-[20px] text-center p480:text-start'>
          <li className='text-[25px] text-red-600 font-semibold'>Контакты</li>
          <li className='flex flex-col '>
            <a className='w-[150px]  mx-auto p480:mx-0 p480:text-start text-[16px] font-semibold hover:text-red-600 ' href="">99 0000 04 41</a>
            <a className='w-[150px]  mx-auto p480:mx-0 text-[16px] font-semibold  hover:text-red-600' href="">99 0000 04 42</a>
            </li>
        </ul>

        <div className="content-box flex flex-col gap-2 mt-4 items-center p480:items-start">
         <a className='inline-flex gap-2 w-[120px]  items-center hover:scale-110' href=""><img className='w-[30px]' src={telegram} alt="" /><span className='text-[#DC2626] font-medium'>Telegram</span></a>
         <a className='inline-flex gap-2 w-[120px]  items-center hover:scale-110' href=""><img className='w-[30px]' src={instagram} alt="" /><span className='text-[#DC2626] font-medium'>Instagram</span></a>
         <a className='inline-flex gap-2 w-[120px]  items-center hover:scale-110' href=""><img className='w-[30px]' src={facebook} alt="" /><span className='text-[#DC2626] font-medium'>Facebook</span></a>
         <a className='inline-flex gap-3 w-[120px]  items-center hover:scale-110' href=""><img className='w-[25px] ml-1' src={email} alt="" /><span className='text-[#DC2626] font-medium'>Email</span></a>
        </div>
      </div>
     </div>
     <span className='w-full block my-5 h-[1px] opacity-35 bg-red-600'></span>
     <div className="text-center pb-5 text-white ">© 2015-2024 Tech Emporium. Все права защищены.</div>
    </div>
  )
}
