import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { addToCart } from '../store/cartSlice';
import { ItemLabel } from './ItemLabel';
import { CapacityIcon, PackIcon, RecycleIcon } from './Icons';
import { Loader } from './Loader';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // const dispatch = useDispatch();
  // const [quantity, setQuantity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  // const handleAddToCart = (e: React.MouseEvent) => {
  //   e.preventDefault(); // Предотвращаем переход по ссылке
  //   e.stopPropagation(); // Останавливаем всплытие события
    
  //   for (let i = 0; i < quantity; i++) {
  //     dispatch(addToCart(product));
  //   }
  //   setQuantity(1);
  // };

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-150 border border-[#b3c1a7] group cursor-pointer"
      whileHover={{ y: -4, scale: 1 }}
      // whileTap={{ scale: 0.98 }}
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
    >
      {/* Контейнер для изображения с эффектом стекла */}
      <div className="w-full relative overflow-hidden bg-gradient-to-br from-white-100 to-white-200">
        {/* Эффект стекла поверх изображения */}
        {/* {imageLoaded && (
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[3px] z-10 group-hover:bg-white/10 group-hover:backdrop-blur-0 transition-all duration-700 ease-out" />
        )} */}

        {/* Градиентный оверлей */}
        <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-700 z-20" />
        
        {/* Изображение товара с max-h-[280px] */}
        <div className="flex items-center justify-center">
          <div className="items-center justify-center relative">
            <img 
              className={`max-h-[175px] object-cover transition-all duration-700 ease-out ${
                imageLoaded 
                  ? '' 
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
      
      <div className="bg-[#f8f9f7] p-3">
        <h3 className="text-lg font-normal text-[#252422] mb-2 tracking-wide">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-start space-x-2 mb-4">
          <ItemLabel
            icon={<RecycleIcon />} 
            property={product.pack}
          />

          <ItemLabel
            icon={<CapacityIcon />}
            property={product.volume}
          />

          <ItemLabel
            icon={<PackIcon />} 
            property={product.quantity_in_pack}
          />
        </div>

        {/* Кнопка в точном стиле как в header */}
        {/* <motion.button
          onClick={handleAddToCart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full items-center justify-center bg-white/20 backdrop-blur-sm text-[#252422] px-4 py-2 rounded-lg flex items-center space-x-2 font-light uppercase tracking-widest text-[18px] border border-white/30 shadow-lg hover:bg-white/80 transition-all duration-300">
          <span>В корзину</span>
        </motion.button> */}
      </div>
    </motion.div>
  );
};

export default ProductCard;