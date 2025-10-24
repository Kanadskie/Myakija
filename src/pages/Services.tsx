import React from 'react';
import { motion } from 'framer-motion';
import delivery from "../images/production_site/delivery.jpg"
import branding from "../images/production_site/branding.jpg";
import { ClearWorkIcon, ClientsIcon, DeliveryIcon, EnergyIcon, HowItWorksIcon, ScienceIcon } from '../components/Icons';
import { IconItemLabel } from '../components/IconItemLabel';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto mt-12 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto"
      >
        <h1 className="text-4xl font-normal mb-8 text-[#252422] tracking-tight">Услуги</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-normal text-[#252422] tracking-wide mb-4">Брендирование</h2>
              <img src={branding} alt="area" className="rounded-t-lg shadow-md"/>
              <div className="font-light text-[#252422] tracking-wide leading-relaxed p-2 md:p-4 bg-[#f8f9f7] rounded-b-lg shadow-md">
                Знаем что нужно B2B-сегменту - предлагаем комплексное решение для бизнеса: от создания эргономичной и стильной бутылки 
                до разработки дизайна этикетки, отражающего ценности вашей компании. Работаем с разными объемами и типами упаковки, включая экологичные варианты.
                <div className="mt-4">
                  <IconItemLabel icon={<ClientsIcon />} text="Для кого это идеально:" className="font-normal"/>
                </div>

                <ul className="font-light text-[#252422] tracking-wide leading-relaxed p-2 md:p-4 rounded-t-lg">
                  <li>• Корпоративные клиенты — для офисов, переговоров, презентаций</li>
                  <li>• Event-индустрия — свадьбы, конференции, фестивали</li>
                  <li>• Бренды товаров — как приложение к основному продукту</li>
                  <li>• Отели и рестораны — для повышения статуса заведения</li>
                </ul>

                <div className="mt-4 font-normal">
                  <IconItemLabel icon={<HowItWorksIcon />} text="Как это работает:" className="font-normal"/>
                </div>

                <ul className="font-light text-[#252422] tracking-wide leading-relaxed p-2 md:p-4 rounded-t-lg">
                  <li>• Консультация — обсудим цели и задачи</li>
                  <li>• Дизайн — создадим или адаптируем макет</li>
                  <li>• Производство — оперативно напечатаем и доставим</li>
                  <li>• Результат — ваш бренд в руках клиентов</li>
                </ul>

                <div className="mt-4 font-normal">
                  <IconItemLabel icon={<EnergyIcon />} text="Наши возможности:" className="font-normal"/>
                </div>

                <ul className="font-light text-[#252422] tracking-wide leading-relaxed p-2 md:p-4 rounded-t-lg">
                  <li>• Минимальный тираж — от 1000 бутылок</li>
                  <li>• Все виды нанесения: этикетка, термотрансфер</li>
                  <li>• Формат: 0.33 л или 0.5 л</li>
                  <li>• Срок исполнения — от 3 рабочих дней</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-normal text-[#252422] tracking-wide mb-4">Доставка</h2>
              <div>
              <div className="font-light text-[#252422] tracking-wide leading-relaxed p-2 md:p-4 bg-[#f8f9f7] rounded-t-lg shadow-md">
                Мы выстраиваем долгосрочное и взаимовыгодное партнёрство, основанное на чёткости и ответственности. Наша система доставки 
                оптимизирована для работы с дистрибьюторами и обеспечивает стабильные поставки в любых объёмах.

                <div className="mt-4 font-normal">Ключевые преимущества:</div>
                
                <div className="font-light text-[#252422] tracking-wide leading-relaxed p-2 md:p-4 rounded-t-lg">
                  <div className="mt-4 font-normal">
                    <IconItemLabel icon={<DeliveryIcon />} text="Бесперебойные поставки:" className="font-normal"/>
                  </div>
                    <ul className="font-light text-[#252422] tracking-wide leading-relaxed p-2 md:p-4 rounded-t-lg">
                      <li>• Отгрузка в течение 48 часов после подтверждения заказа</li>
                      <li>• Возможность срочных поставок под высокий спрос</li>
                      <li>• Доставка собственным и партнёрским транспортом</li>
                      <li>• Минимальные партии от 1000 бутылок</li>
                      <li>• Работа с паллетами</li>
                    </ul>
                  <div className="mt-4 font-normal">
                    <IconItemLabel icon={<ScienceIcon />} text="Сохранение качества:" className="font-normal"/>
                  </div>
                    <ul className="font-light text-[#252422] tracking-wide leading-relaxed p-2 md:p-4 rounded-t-lg">
                      <li>• Соблюдение температурного режима при транспортировке</li>
                      <li>• Герметичная упаковка, исключающая внешнее воздействие</li>
                      <li>• Работа с паллетами</li>
                    </ul>
                  <div className="mt-4 font-normal">
                    <IconItemLabel icon={<ClearWorkIcon />} text="Прозрачность работы:" className="font-normal"/>
                  </div>
                    <ul className="font-light text-[#252422] tracking-wide leading-relaxed p-2 md:p-4 rounded-t-lg">
                      <li>• Персональный менеджер для каждого партнёра</li>
                      <li>• Детальная сопроводительная документация</li>
                    </ul>
                </div>
              </div>
              </div>
              <img src={delivery} alt="packing" className="rounded-b-lg shadow-md"/>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;