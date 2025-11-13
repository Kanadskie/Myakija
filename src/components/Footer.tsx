import React from 'react';
import { Link } from 'react-router-dom';
import { VKIcon, TelegramIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-[#252422]/80 backdrop-blur-md border-t border-white/20 shadow-lg"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Бренд */}
          <div className="text-center md:text-left">
            <h4 className="font-normal mb-4 tracking-wide text-white drop-shadow-lg text-lg">Время работы</h4>
            <ul className="space-y-3">
              <li className="text-white/80 tracking-wide text-sm bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/20 inline-block w-full">Пн-Пт: 8:00-17:00</li>
              <li className="text-white/80 tracking-wide text-sm bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/20 inline-block w-full">Сб-Вс: Выходной</li>
            </ul>
          </div>
          
          {/* Навигация */}
          <div className="hidden md:block text-center md:text-left">
            <h4 className="font-normal mb-4 tracking-wide text-white drop-shadow-lg text-lg">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-white/80 hover:text-white transition-all duration-300 tracking-wide text-sm bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/20 hover:bg-white/20 inline-block w-full"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-white/80 hover:text-white transition-all duration-300 tracking-wide text-sm bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/20 hover:bg-white/20 inline-block w-full"
                >
                  О бренде
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="text-white/80 hover:text-white transition-all duration-300 tracking-wide text-sm bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/20 hover:bg-white/20 inline-block w-full"
                >
                  Продукция
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-white/80 hover:text-white transition-all duration-300 tracking-wide text-sm bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/20 hover:bg-white/20 inline-block w-full"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacts" 
                  className="text-white/80 hover:text-white transition-all duration-300 tracking-wide text-sm bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/20 hover:bg-white/20 inline-block w-full"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div className="text-center md:text-left">
            <h4 className="font-normal mb-4 tracking-wide text-white drop-shadow-lg text-lg">Контакты</h4>
            <ul className="space-y-3 text-white/80 tracking-wide text-sm">
              <li className="bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/20">
                <a href="tel:+7 (48234) 2-06-11">+7 (48234) 2-06-11</a>
              </li>
              <li className="bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/20">
                <a href="mailto: info@myakija.ru">info@myakija.ru</a>
              </li>
              <li className="bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/20">
                171640, РФ, Тверская область, г. Кашин, ул. Строителей, 7
              </li>
            </ul>
          </div>
          
          {/* Социальные сети */}
          <div className="text-center md:text-left">
            <h4 className="font-normal mb-4 tracking-wide text-white drop-shadow-lg text-lg">Мы в соцсетях</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="#" 
                className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-lg border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              >
                <VKIcon className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-lg border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              >
                <TelegramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Копирайт */}
        <div className="border-t border-white/30 mt-8 pt-8 text-center">
          <p className="text-white/60 tracking-wide text-sm drop-shadow">
            &copy; 2014-2025 Мякижа. Все права защищены.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;