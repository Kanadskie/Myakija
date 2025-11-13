import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { motion, AnimatePresence } from 'framer-motion';
import { CartIcon, HomeIcon } from './Icons';

const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Glass morphism background */}
        <div className="absolute inset-0 bg-[#b3c1a7]/80 backdrop-blur-sm shadow-lg [-webkit-backdrop-filter:blur(8px)] [backdrop-filter:blur(8px)] bg-opacity-80"></div>
        
        <div className="container mx-auto px-4 py-2 relative z-10">
          
          <div className="flex justify-between items-center">
            <Link to="/" className="relative">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <div className="bg-white/20 backdrop-blur-sm text-[#252422] px-2 py-2 rounded-lg flex items-center space-x-2 font-light tracking-widest text-[18px] border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
                    <HomeIcon />
                  </div>
                </motion.div>
              </Link>

            {/* Десктопная навигация с активными стилями */}
            <nav className="hidden lg:flex space-x-6 lg:space-x-12">
              <NavLink 
                  to="/about" 
                  className={({ isActive }) =>
                      `text-[22px] font-light tracking-widest py-2 transition-all duration-200 relative group`
                  }
              >
                  {({ isActive }) => (
                      <>
                          О бренде
                          <span className={`absolute bottom-[5px] left-0 h-[2px] bg-[#252422]/80 rounded transition-all duration-200 ${
                              isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}></span>
                      </>
                  )}
              </NavLink>
              <NavLink 
                  to="/products" 
                  className={({ isActive }) =>
                      `text-[22px] font-light tracking-widest py-2 transition-all duration-200 relative group`
                  }
              >
                  {({ isActive }) => (
                      <>
                          Продукция
                          <span className={`absolute bottom-[5px] left-0 h-[2px] bg-[#252422]/80 rounded transition-all duration-200 ${
                              isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}></span>
                      </>
                  )}
              </NavLink>
              <NavLink 
                  to="/services" 
                  className={({ isActive }) =>
                      `text-[22px] font-light tracking-widest py-2 transition-all duration-200 relative group`
                  }
              >
                  {({ isActive }) => (
                      <>
                          Услуги
                          <span className={`absolute bottom-[5px] left-0 h-[2px] bg-[#252422]/80 rounded transition-all duration-200 ${
                              isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}></span>
                      </>
                  )}
              </NavLink>
              <NavLink 
                  to="/contacts" 
                  className={({ isActive }) =>
                      `text-[22px] font-light tracking-widest py-2 transition-all duration-200 relative group`
                  }
              >
                  {({ isActive }) => (
                      <>
                          Контакты
                          <span className={`absolute bottom-[5px] left-0 h-[2px] bg-[#252422]/80 rounded transition-all duration-200 ${
                              isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}></span>
                      </>
                  )}
              </NavLink>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Корзина */}
              <Link to="/cart" className="relative">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <div className="bg-white/20 backdrop-blur-sm text-[#252422] px-2 py-2 rounded-lg flex items-center space-x-2 font-light tracking-widest text-[18px] border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
                    <CartIcon />
                    <span className="hidden sm:inline">Корзина</span>
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-[#e6b483] text-[#252422] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shadow-lg">
                        {totalItems}
                      </span>
                    )}
                  </div>
                </motion.div>
              </Link>

              {/* Бургер-меню для мобильных */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden bg-white/20 backdrop-blur-sm text-white p-3 rounded-lg border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300"
              >
                <div className="w-4 h-4 flex flex-col justify-center space-y-1">
                  <span className={`block h-[1.5px] w-full bg-[#252422] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block h-[1.5px] w-full bg-[#252422] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block h-[1.5px] w-full bg-[#252422] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Мобильное меню */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Затемнение фона */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMobileMenu}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              />
              
              {/* Боковое меню в стиле glass */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-80 z-50 lg:hidden"
              >
                {/* Glass background */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-l border-white/20 shadow-2xl"></div>
                
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Заголовок и кнопка закрытия */}
                  <div className="flex justify-end items-center mb-8">
                    <button
                      onClick={closeMobileMenu}
                      className="text-white hover:text-white/80 transition-colors bg-white/20 backdrop-blur-sm p-2 rounded-lg border border-white/30"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Навигация с активными стилями */}
                  <nav className="flex-1 space-y-4">
                    <NavLink
                      to="/about"
                      onClick={closeMobileMenu}
                      className={({ isActive }) => 
                        `block font-light tracking-widest py-4 px-4 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 ${
                          isActive 
                            ? 'bg-white/20 text-white/80' 
                            : 'bg-white/10 text-white hover:bg-white/20 hover:text-white/80'
                        }`
                      }
                    >
                      О бренде
                    </NavLink>
                    <NavLink
                      to="/products"
                      onClick={closeMobileMenu}
                      className={({ isActive }) => 
                        `block font-light tracking-widest py-4 px-4 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 ${
                          isActive 
                            ? 'bg-white/20 text-white/80' 
                            : 'bg-white/10 text-white hover:bg-white/20 hover:text-white/80'
                        }`
                      }
                    >
                      Продукция
                    </NavLink>
                    <NavLink
                      to="/services"
                      onClick={closeMobileMenu}
                      className={({ isActive }) => 
                        `block font-light tracking-widest py-4 px-4 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 ${
                          isActive 
                            ? 'bg-white/20 text-white/80' 
                            : 'bg-white/10 text-white hover:bg-white/20 hover:text-white/80'
                        }`
                      }
                    >
                      Услуги
                    </NavLink>
                    <NavLink
                      to="/contacts"
                      onClick={closeMobileMenu}
                      className={({ isActive }) => 
                        `block font-light tracking-widest py-4 px-4 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 ${
                          isActive 
                            ? 'bg-white/20 text-white/80' 
                            : 'bg-white/10 text-white hover:bg-white/20 hover:text-white/80'
                        }`
                      }
                    >
                      Контакты
                    </NavLink>
                  </nav>

                  {/* Контакты в мобильном меню */}
                  <div className="pt-6 border-t border-white/30">
                    <div className="text-white space-y-3">
                      <p className="font-light bg-white/10 backdrop-blur-sm py-2 px-3 rounded-lg border border-white/20"><a href="tel:+7 (48234) 2-06-11">+7 (48234) 2-06-11</a></p>
                      <p className="font-light bg-white/10 backdrop-blur-sm py-2 px-3 rounded-lg border border-white/20"><a href="mailto: info@myakija.ru">info@myakija.ru</a></p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
      
      {/* Spacer для фиксированного header */}
      {/* <div className="h-12"></div> */}
    </>
  );
};

export default Header;