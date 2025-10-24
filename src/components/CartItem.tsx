import React from 'react';
import { motion } from 'framer-motion';
import { CartItem as CartItemType } from '../types';
import { MinusIcon, PlusIcon, DeleteIcon } from './Icons';

interface CartItemProps {
  item: CartItemType;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="bg-white p-3 md:p-6 rounded-lg shadow-md mb-4 border border-[#b3c1a7]"
    >
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex w-16 h-20 items-center justify-center">
          <img src={item.product.image} alt="product"></img>
        </div>
        
        <div className="flex-1">
          <h3 className="text-sm md:text-lg font-normal text-[#252422] tracking-wide">{item.product.name}</h3>
          <p className="text-sm md:text-base text-[#252422] font-light tracking-wide">{item.product.volume}</p>
          {/* <p className="text-[#849c8c] font-normal tracking-tight">{item.product.price} ₽</p> */}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onUpdateQuantity(item.quantity - 1)}
            className="w-8 h-8 rounded-md border border-[#252422]/50 flex items-center justify-center text-[#252422] hover:border-[#252422]"
          >
            <MinusIcon className="w-3 h-3" />
          </button>
          <span className="w-10 lg:w-16 text-center text-sm md:text-base font-light md:font-normal text-[#252422]">{item.quantity} уп</span>
          <button
            onClick={() => onUpdateQuantity(item.quantity + 1)}
            className="w-8 h-8 rounded-md border border-[#252422]/50 flex items-center justify-center text-[#252422] hover:border-[#252422]"
          >
            <PlusIcon className="w-3 h-3" />
          </button>
        </div>

        <div className="flex justify-center text-right">
          {/* <div className="font-normal text-lg text-[#252422] tracking-tight">
            {item.product.price * item.quantity} ₽
          </div> */}
          <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRemove}
              className="inline-block text-[#252422] hover:opacity-70 space-x-1 tracking-wide transition-colors"
          >
            <DeleteIcon className="w-6 h-6" />
            {/* <span className="text-base font-light">Удалить</span> */}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;