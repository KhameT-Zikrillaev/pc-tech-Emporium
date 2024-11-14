import React from 'react';

export default function About() {
  return (
    <div className="about bg-gradient-to-r from-[#1B2838] to-[#2A3F54] pb-4 px-4">
            <h2 className="text-md p480:text-xl p768:text-2xl font-bold text-center text-zinc-300">
          О наша компания
        </h2>
        <div className="w-[80%] h-[2px] mx-auto bg-zinc-300 my-4 opacity-10"></div>
      <div className="container mx-auto max-w-5xl bg-gray-100 rounded-2xl shadow-lg p-8 p480:p-12 md:p-8 lg:px-16 transform transition duration-300  hover:shadow-2xl">
      
        <div className="w-[80%] h-[2px] mx-auto bg-gradient-to-r from-teal-500 to-blue-600 my-4"></div>
        <p className="p480:text-lg text-gray-700 leading-relaxed mb-4 p480:mb-12 tracking-wide">
          <strong className="text-blue-900">"TAFAKKUR XIZMAT SAMARASI" MChJ</strong> — это динамично развивающаяся компания, которая уже несколько лет успешно работает в сфере обслуживания офисной техники, обеспечивая клиентов надежными и качественными услугами. Мы специализируемся на заправке и восстановлении картриджей, ремонте и техническом обслуживании принтеров и другой оргтехники. Наша команда состоит из опытных специалистов, готовых решать самые сложные задачи и помогать нашим клиентам оптимизировать свои затраты на печать и обслуживание оборудования.
        </p>
        {/* <div className="flex justify-center mt-10">
          <button className="bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Узнать больше
          </button>
        </div> */}
         <div className="w-[80%] h-[2px] mx-auto bg-gradient-to-r from-teal-500 to-blue-600 my-4"></div>
      </div>
      
      {/* Карточки для дополнительных блоков */}
      <div className="mt-12 flex flex-wrap justify-center gap-2 p768:gap-8">
        <div className="text-center bg-gray-100 p-6 cursor-pointer  rounded-lg shadow-md hover:bg-gray-200 transition duration-300 w-full sm:w-1/3 lg:w-1/4">
          <i className="fas fa-users text-4xl text-blue-700 mb-4"></i>
          <h3 className="text-xl font-semibold text-blue-800">Профессиональная команда</h3>
          <p className="text-gray-600">Мы гордимся нашей командой, которая всегда готова прийти на помощь.</p>
        </div>
        <div className="text-center bg-gray-100 p-6  cursor-pointer rounded-lg shadow-md hover:bg-gray-200 transition duration-300 w-full sm:w-1/3 lg:w-1/4">
          <i className="fas fa-cogs text-4xl text-teal-500 mb-4"></i>
          <h3 className="text-xl font-semibold text-teal-600">Современные технологии</h3>
          <p className="text-gray-600">Мы используем только самые современные решения для обеспечения высокого качества.</p>
        </div>
        <div className="text-center bg-gray-100 p-6 cursor-pointer rounded-lg shadow-md hover:bg-gray-200 transition duration-300 w-full sm:w-1/3 lg:w-1/4">
          <i className="fas fa-clipboard-check text-4xl text-yellow-600 mb-4"></i>
          <h3 className="text-xl font-semibold text-yellow-500">Надежность и качество</h3>
          <p className="text-gray-600">Наша цель — обеспечить ваших клиентов надежной техникой с максимальным сроком службы.</p>
        </div>
      </div>
    </div>
  );
}
