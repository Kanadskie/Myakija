import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WaterIcon, ScienceIcon, DeliveryIcon, SearchIcon, FilterIcon, FlatDeliveryIcon, PackIcon, WellIcon } from '../components/Icons';
import hero from "../images/production_site/line.jpg"
import logo from '../images/logo.png'

const Home: React.FC = () => {

  const processSteps = [
    { step: "01", title: "Добыча", description: "Артезианские скважины 130 м", icon: <WellIcon className="w-8 h-8" /> },
    { step: "02", title: "Очистка", description: "5 ступеней фильтрации", icon: <FilterIcon className="w-8 h-8" /> },
    { step: "03", title: "Контроль", description: "Лабораторные тесты", icon: <SearchIcon className="w-8 h-8" /> },
    { step: "04", title: "Упаковка", description: "Качественные материалы", icon: <PackIcon className="w-8 h-8" /> },
    { step: "05", title: "Доставка", description: "Быстрая отгрузка", icon: <FlatDeliveryIcon className="w-8 h-8" /> }
  ];

  return (
    <div>
      {/* Hero Section */}
     <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 lg:bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}></div>
        <div className="absolute inset-0"
            style={{
            background: 'linear-gradient(135deg, rgba(185, 188, 181, 0.95) 0%, rgba(131, 136, 132, 0.85) 90%)'
          }}>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center container mx-auto px-4 text-center">
          <motion.img 
            className="w-[160px] mb-4 m-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            src={logo}
            alt="logo"
          ></motion.img>
          <motion.h1 
            className="text-3xl md:text-5xl dark:text-gray dark:text-shadow-2xs mb-6 tracking-light leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            Исконная чистота земли
          </motion.h1>
          <motion.p 
            className="text-xl font-light mb-8 max-w-2xl mx-auto tracking-wide leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Мы не просто производим воду — мы храним её эталонное качество. 
            Оснащённая современным оборудованием собственная лаборатория проводит жёсткий многоступенчатый контроль на каждом этапе производства. 
            Вся наша продукция сертифицирована и соответствует самым строгим нормам.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              to="/products"
            >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#252422] text-[#b3c1a7] px-6 py-2 rounded-lg text-lg font-light hover:bg-[#2a2a28] transition-colors inline-block tracking-wider uppercase">
              Сделать заказ
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Features Section */}
      <section className="pt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-12 text-[#252422] tracking-wide">
            Почему выбирают Мякижу?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -4, scale: 1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-[#b3c1a7] rounded-full flex items-center justify-center mx-auto mb-4">
                <WaterIcon className="w-8 h-8 text-[#252422]" />
              </div>
              <h3 className="text-xl mb-2 text-[#252422] tracking-wide">
                Природная чистота
              </h3>
              <p className="font-light text-[#252422] tracking-wide leading-relaxed">
                Добывается из артезианских скважин глубиной 130 метров
              </p>
            </motion.div>

            <motion.div 
              className="text-center bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -4, scale: 1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-[#b3c1a7] rounded-full flex items-center justify-center mx-auto mb-4">
                <ScienceIcon className="w-8 h-8 text-[#252422]" />
              </div>
              <h3 className="text-xl mb-2 text-[#252422] tracking-wide">
                Контроль качества
              </h3>
              <p className="font-light text-[#252422] tracking-wide leading-relaxed">
                Многоступенчатая система очистки и регулярные лабораторные испытания
              </p>
            </motion.div>

            <motion.div 
              className="text-center bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -4, scale: 1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-[#b3c1a7] rounded-full flex items-center justify-center mx-auto mb-4">
                <DeliveryIcon className="w-8 h-8 text-[#252422]" />
              </div>
              <h3 className="text-xl mb-2 text-[#252422] tracking-wide">
                Быстрая отгрузка
              </h3>
              <p className="font-light text-[#252422] tracking-wide leading-relaxed">
                Ваш заказ будет проверен и подготовлен к отправке в кратчайшие сроки
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#b3c1a7]/80 backdrop-blur-md shadow-lg py-10 mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "2014", label: "Год основания" },
              { number: "130+", label: "Метров глубина скважин" },
              { number: "3", label: "Артезианских источника" },
              { number: "100%", label: "Сертифицированная продукция" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.5 }}
                className="p-6"
                viewport={{ once: true }}
              >
                <div className="text-3xl font-normal mb-2">{stat.number}</div>
                <div className="font-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Production Process Infographic */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-normal text-[#252422] mb-4 tracking-tight">
              Процесс производства
            </h2>
            <p className="text-xl font-light mx-auto">
              Каждый этап тщательно контролируется для обеспечения высочайшего качества
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
                whileHover={{ y: -4, scale: 1, transition: {duration: 0.4, delay: 0}}}
                viewport={{ once: true }}
              >
                <div className="bg-[#f8f9f7] rounded-lg shadow-md border border-[#b3c1a7] p-6 text-center h-full transition-all duration-300">
                  {/* Step Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-[#b3c1a7] rounded-full flex items-center justify-center">
                      <span className="text-[#252422] text-sm font-normal">{step.step}</span>
                    </div>
                    <div className="w-6 h-0.5 bg-[#252422]/30 flex-1 mx-2 lg:block"></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4 text-[#252422]">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-normal text-[#252422] mb-2">
                    {step.title}
                  </h3>
                  <p className="font-light text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;