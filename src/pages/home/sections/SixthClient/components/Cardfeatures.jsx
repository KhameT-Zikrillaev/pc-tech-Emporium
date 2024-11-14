import React from 'react';


export default function Cardfeatures({ title, text, icon, style, nums, datatitle }) {
  return (
    <div
      className={`relative bg-white flex flex-col  p768:flex max-w-[450px] w-full px-8 py-2 border cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out  mx-auto transform hover:scale-105 ${style}`}
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-10 rounded-2xl pointer-events-none"></div>
      
      <div className="flex items-center space-x-5 relative z-10">
        <div>
          <div className="flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-full  w-8 h-8 p768:w-16 p768:h-16 shadow-md transition transform duration-300 ease-in-out hover:rotate-12 hover:scale-110">
          
            <div className=' text-[20px] p768:text-[30px]'>{React.createElement(icon)}</div>
          </div>
        </div>

        <div className='text-center p768:text-start'>
          <h3 className="text-xl font-semibold text-gray-900 tracking-wide transition duration-300 ease-in-out hover:text-indigo-500">{title}</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">{text}</p>
        </div>
      </div>

      {/* Размещение `nums` и `datatitle` в правом верхнем углу */}
      <div className="p768:absolute justify-center    bottom-2 right-4 text-indigo-500 font-semibold text-lg flex items-center space-x-1">
        <span className='text-center'>{nums}</span>
        <span className='text-center'>{datatitle}</span>
      </div>
    </div>
  );
}
