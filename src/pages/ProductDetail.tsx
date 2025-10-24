import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { addToCart } from '../store/cartSlice';
import { MinusIcon, PlusIcon } from '../components/Icons';
import { Loader } from '../components/Loader';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="container mx-auto mt-20 px-4 py-8 text-center">
        <h1 className="text-4xl font-normal text-[#252422] tracking-tight">Товар не найден</h1>

        <Link 
          to="/products"
          className="text-[#252422] font-light hover:text-[#b3c1a7] mt-4 inline-block tracking-wide"
        >
          <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-[#252422] text-[#b3c1a7] px-6 py-2 rounded-lg text-lg font-light hover:bg-[#2a2a28] transition-colors inline-block tracking-wider uppercase"
            >
            Вернуться к продукции
          </motion.button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
      setQuantity(1)
    }
  };

  return (
    <div className="container mx-auto mt-20 px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="max-h-[480px] bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 border border-[#b3c1a7] group cursor-pointer">
             {/* Контейнер для изображения с эффектом стекла */}
             <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-white-100 to-white-200">
               <div className="flex items-center justify-center">
                 <div className="items-center justify-center relative">
                   <img 
                     className={`max-h-[480px] object-cover transition-all duration-700 ease-out ${
                       imageLoaded 
                         ? 'filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-105 group-hover:scale-101' 
                         : 'opacity-0'
                     }`} 
                     src={`${product.image}`} 
                     alt={`${product.name}`}
                     onLoad={handleImageLoad}
                   />
                 </div>
               </div>
               
               {/* Заглушка пока изображение загружается */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <Loader />
                  </div>
                )}
       
               {/* Эффект блика стекла */}
               {/* <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/60 to-transparent rounded-br-full z-15 group-hover:opacity-0 transition-opacity duration-700" /> */}
               
               {/* Эффект отражения */}
               {/* <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/30 to-transparent rounded-tl-full z-15 group-hover:opacity-0 transition-opacity duration-700" /> */}
             </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-4xl font-normal text-[#252422] mb-2 tracking-tight">{product.name}</h1>
            <p className="text-[#252422] text-lg font-light tracking-wide leading-relaxed">{product.description}</p>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-3">
            <div>
              <h3 className="font-normal text-[#252422] tracking-wide">Химический состав:</h3>
              <p className="text-[#252422] font-light tracking-wide">{product.composition}</p>
            </div>
            <div>
              <h3 className="font-normal text-[#252422] tracking-wide">Общая минерализация:</h3>
              <p className="text-[#252422] font-light tracking-wide">{product.mineralization}</p>
            </div>
            {typeof product['hardness'] === 'string' && product.hardness.length ? 
            <div>
              <h3 className="font-normal text-[#252422] tracking-wide">Общая жесткость:</h3>
              <p className="text-[#252422] font-light tracking-wide">{product.hardness}</p>
            </div>
            : ""}
            <div className="flex space-x-12">
              <div>
                <h3 className="font-normal text-[#252422] tracking-wide">Объем:</h3>
                <p className="text-[#252422] font-light tracking-wide">{product.volume}</p>
              </div>
              <div>
                <h3 className="font-normal text-[#252422] tracking-wide">В упаковке:</h3>
                <p className="text-[#252422] font-light tracking-wide">{product.quantity_in_pack}</p>
              </div>
              </div>
          </div>

          <div className="flex flex-col md:flex-row justify-start md:space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-md border border-[#252422]/50 flex items-center justify-center text-[#252422] hover:border-[#252422]"
              >
                <MinusIcon className="w-4 h-4" />
              </button>
              <span className="w-10 lg:w-16 text-center text-lg font-semibold text-[#252422]">{quantity} уп</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-md border border-[#252422]/50 flex items-center justify-center text-[#252422] hover:border-[#252422]"
              >
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>

            <div className="space-x-4 mt-6 md:mt-0 ">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="bg-[#252422] text-[#b3c1a7] px-6 py-2 rounded-lg text-lg font-light hover:bg-[#2a2a28] transition-colors tracking-wider uppercase"
              >
                В корзину
              </motion.button>

            <Link
              to="/products"
              className=""
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#252422] text-[#b3c1a7] px-6 py-2 rounded-lg text-lg font-light hover:bg-[#2a2a28] transition-colors tracking-wider uppercase"
              >
                Назад
              </motion.button>
            </Link>
            </div>
          </div>

          {/* <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-[#849c8c] hover:text-[#b3c1a7] mt-4 tracking-wide"
          >
            <ArrowBackIcon className="w-5 h-5" />
            <span>Назад к продукции</span>
          </Link> */}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;