import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '../store';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';
import CartItem from '../components/CartItem';

const Cart: React.FC = () => {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div className="flex justify-center container mx-auto mt-20 px-4 py-8 text-center">
        <div className="bg-[#f8f9f7] p-6 rounded-lg shadow-md border border-[#b3c1a7]">
          <h1 className="text-4xl font-normal mb-4 text-[#252422] tracking-tight">Корзина пуста</h1>
          <Link
            to="/products"
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
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-12 px-4 py-8">
      <h1 className="text-4xl font-normal mb-8 text-[#252422] tracking-tight">Корзина</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <AnimatePresence>
            {items.map(item => (
              <CartItem
                key={item.product.id}
                item={item}
                onRemove={() => dispatch(removeFromCart(item.product.id))}
                onUpdateQuantity={(quantity) => 
                  dispatch(updateQuantity({ id: item.product.id, quantity }))
                }
              />
            ))}
          </AnimatePresence>

            <div className="flex justify-center">
              <motion.button
                onClick={() => dispatch(clearCart())}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#252422] text-[#b3c1a7] px-6 py-2 rounded-lg text-lg font-light hover:bg-[#2a2a28] transition-colors inline-block tracking-wider uppercase"
              >
                Очистить корзину
              </motion.button>
            </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-[#f8f9f7] p-6 rounded-lg shadow-md border border-[#b3c1a7] sticky top-20">
            <h2 className="text-lg font-normal mb-4 text-[#252422] tracking-wide">Итого</h2>
            <div className="space-y-2 mb-6 text-[#252422]">
              <div className="flex justify-between tracking-wide">
                <span className="font-light">Товары ({items.reduce((total, item) => total + item.quantity, 0)})</span>
                {/* <span>{total} ₽</span> */}
              </div>
              {/* <div className="flex justify-between tracking-wide">
                <span>Доставка</span>
                <span className="text-[#849c8c] font-semibold">Бесплатно</span>
              </div> */}
              <div className="border-t border-[#b3c1a7] pt-2 mt-2">
                {/* <div className="flex justify-between text-lg font-normal tracking-wide">
                  <span>К оплате</span>
                  <span className="text-[#849c8c]">{total} ₽</span>
                </div> */}
              </div>
            </div>

            <Link to="/checkout" className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#252422] text-[#b3c1a7] px-6 py-2 rounded-lg text-lg font-light hover:bg-[#2a2a28] transition-colors inline-block tracking-wider uppercase"
              >
                Оформить заказ
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;