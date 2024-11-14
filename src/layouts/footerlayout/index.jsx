import React from "react";

export default function footerlayout() {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-10 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.avtomaster24.uz%2F&psig=AOvVaw1lV4N8M31s0c6q1_Z7pW9v&ust=1682941261694000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPCZ86n7pv8CFQAAAAAdAAAAABAD"
                alt="logo"
                className="w-24 h-auto mb-4"
              />
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-bold mb-4">Компания</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="hover:underline">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                  Наши Перемущество
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                  Наши Услуги
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-bold mb-4">Контакты</h4>
              <ul>
                <li>
                  <a
                    href="mailto:javohir9953399@gmail.com"
                    className="hover:underline"
                  >
                    Электронное почты
                  </a>
                </li>
                <li>
                  <a href="tel:+998909953399" className="hover:underline">
                    +998 90 995 33 99
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Адрес
                  </a>
                  <p className="mt-2">
                    Город Ташкент; улица Шахрисабз: 56
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-bold mb-4">Вызов мастера</h4>
              <p className="mb-4">
              Сломался ли ваш принтер или другая техника? Если у вас нет возможности привезти оборудование в мастерскую, наши специалисты готовы помочь! Все, что вам нужно сделать — это позвонить, и мы приедем к вам для диагностики и ремонта.
              </p>
              <button className="bg-indigo-500 text-[12px] p480:text-[16px] bg-opacity-20 text-indigo-300 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-40 transition duration-300 transform hover:scale-105">
                На Выезд
              </button>
            </div>
          </div>
          <div className="footer-bottom-container">
            <div className="w-full h-[1px] bg-slate-400 mt-6 opacity-35"></div>

            <div className="flex  w-full justify-between mt-6">
            <h3>© 2022 "TAFAKKUR XIZMAT SAMARASI" MChJ</h3>
            <p className="text-[14px] font-extralight">Creat By <span className="text-[#a357ff] font-semibold">LIMSA</span></p>
            </div>
           
          </div>
        </div>
      </footer>
    </>
  );
}