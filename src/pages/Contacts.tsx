import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LocationIcon, PhoneIcon, EmailIcon, TimeIcon } from '../components/Icons';
import { Loader } from '../components/Loader';


const Contacts: React.FC = () => {

  const [mapLoaded, setMapLoaded] = useState(false)

  const handleMapLoad = () => {
    setMapLoaded(true)
  }

  return (
    <div className="container mx-auto mt-12 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-normal mb-8 text-[#252422] tracking-tight">Контакты</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl font-normal mb-6 text-[#252422] tracking-wide">Свяжитесь с нами</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#b3c1a7] rounded-full flex items-center justify-center flex-shrink-0">
                  <LocationIcon className="w-5 h-5 text-[#252422]" />
                </div>
                <div>
                  <h3 className="font-normal text-[#252422] tracking-wide">Адрес производства</h3>
                  <p className="font-light text-[#252422] tracking-wide">171640, РФ, Тверская область</p>
                  <p className="font-light text-[#252422] tracking-wide">г. Кашин, ул. Строителей, дом 7</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#b3c1a7] rounded-full flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-5 h-5 text-[#252422]" />
                </div>
                <div>
                  <h3 className="font-normal text-[#252422] tracking-wide">Телефон</h3>
                  <p className="font-light text-[#252422] hover:text-[#b3c1a7] tracking-wide"><a href="tel:+7 (48234) 2-06-11">+7 (48234) 2-06-11</a></p>
                  <p className="font-light text-[#252422] hover:text-[#b3c1a7] tracking-wide"><a href="tel:+7 (910) 933-03-91">+7 (910) 933-03-91</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#b3c1a7] rounded-full flex items-center justify-center flex-shrink-0">
                  <EmailIcon className="w-5 h-5 text-[#252422]" />
                </div>
                <div>
                  <h3 className="font-normal text-[#252422] tracking-wide">Email</h3>
                  <p className="font-light text-[#252422] hover:text-[#b3c1a7] tracking-wide"><a href="mailto: info@myakija.ru">info@myakija.ru</a></p>
                  <p className="font-light text-[#252422] hover:text-[#b3c1a7] tracking-wide"><a href="mailto: sales@myakija.ru">sales@myakija.ru</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#b3c1a7] rounded-full flex items-center justify-center flex-shrink-0">
                  <TimeIcon className="w-5 h-5 text-[#252422]" />
                </div>
                <div>
                  <h3 className="font-normal text-[#252422] tracking-wide">Время работы</h3>
                  <p className="font-light text-[#252422] tracking-wide">Пн-Пт: 8:00-17:00</p>
                  <p className="font-light text-[#252422] tracking-wide">Сб-Вс: Выходной</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <h2 className="text-2xl font-normal mb-6 text-[#252422] tracking-wide">Мы на карте</h2>
            
            <div className="rounded-lg shadow-md border border-[#b3c1a7] overflow-hidden">
              <div className="h-96 rounded-lg overflow-hidden">
                {!mapLoaded && (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <Loader />
                  </div>
                )}
                <div className="w-full h-full" onLoad={handleMapLoad}>
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?ll=37.580382%2C57.352739&mode=search&oid=1720108370&ol=biz&z=16.31"  
                    title="Мякижа на карте"
                    className="w-full h-full"
                    style={{ filter: 'grayscale(1) contrast(0.9) brightness(0.95)' }}
                    onLoad={handleMapLoad}>
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contacts;