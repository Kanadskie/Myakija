import React from 'react';
import { motion } from 'framer-motion';
import area from "../images/production_site/area.jpg"
import packing from "../images/production_site/packing.jpg"
import test from "../images/production_site/test.jpg"
import washing from "../images/production_site/washing.jpg"

const About: React.FC = () => {
  return (
    <div className="container mx-auto mt-12 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto"
      >
        <h1 className="text-4xl font-normal mb-8 text-[#252422] tracking-tight">О бренде</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            <div className="grid grid-cols-1 gap-12">
              <div>
                <h2 className="text-2xl font-normal text-[#252422] tracking-wide mb-4">Наша миссия</h2>
                  <p className="text-justify font-light text-[#252422] tracking-wide leading-relaxed p-2 md:p-6 bg-[#f8f9f7] rounded-t-lg shadow-md">                    С момента основания в 2014 году главная цель «Мякижи» остаётся неизменной: предлагать потребителям эталонное качество — лучшую питьевую и минеральную воду из природных источников.
                    Мы верим, что истинная чистота рождается в глубине природы. Именно поэтому наше производство основано на собственных артезианских скважинах, где вода, защищенная мощными водоупорными 
                    пластами, сохраняет свой первозданный минеральный состав и свежесть. Мы не просто добываем воду, а бережно храним и разливаем её таким же чистым и сбалансированным подарком природы, каким она рождается в её недрах.
                  </p>
                <img src={area} alt="area" className="relative rounded-b-lg shadow-md"/>
              </div>
              
              <div>
                <h2 className="text-2xl font-normal text-[#252422] tracking-wide mb-4">Наши ценности</h2>
                <div>
                  <ul className="font-light text-[#252422] tracking-wide leading-relaxed p-2 md:p-6 bg-[#f8f9f7] rounded-t-lg shadow-md">
                    <li>• Качество и безопасность продукции</li>
                    <li>• Забота о здоровье потребителей</li>
                    <li>• Экологическая ответственность</li>
                    <li>• Инновации и развитие</li>
                  </ul>
                </div>
                <img src={packing} alt="packing" className="rounded-b-lg shadow-md"/>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-12">
              <div>
                <h2 className="text-2xl font-normal text-[#252422] tracking-wide mb-4">Чистота из самого сердца земли</h2>
                <div>
                  <p className="text-justify font-light text-[#252422] tracking-wide leading-relaxed p-2 md:p-6 bg-[#f8f9f7] rounded-t-lg shadow-md">
                    Наше производство начинается с трёх уникальных артезианских скважин, уходящих на глубину более 130 метров. 
                    Этот изолированный водоносный горизонт, защищённый от грунтовых вод и деятельности человека, является бесценным 
                    источником, сохранившим свою природную структуру и идеальный минеральный баланс. Благодаря многолетней естественной 
                    фильтрации, наша вода обладает не только безупречной чистотой, но и сбалансированным составом микроэлементов. 
                    Мы не изменяем её структуру искусственно, а лишь аккуратно разливаем по бутылкам, чтобы донести до вас живую энергию глубинных земных слоёв.
                  </p>
                </div>
                <img src={washing} alt="washing" className="rounded-b-lg shadow-md"/>
              </div>

              <div>
                <h2 className="text-2xl font-normal text-[#252422] tracking-wide mb-4">Гарантия, подтверждённая наукой</h2>
                <div>
                  <p className="text-justify font-light text-[#252422] tracking-wide leading-relaxed p-2 md:p6 bg-[#f8f9f7] rounded-t-lg shadow-md">
                  Мы не просто производим воду — мы храним её эталонное качество. Оснащённая современным оборудованием собственная 
                  лаборатория проводит жёсткий многоступенчатый контроль на каждом этапе производства. Вся наша продукция сертифицирована 
                  и соответствует самым строгим нормам.
                  </p>
                </div>
                <img src={test} alt="test" className="rounded-b-lg shadow-md"/>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;