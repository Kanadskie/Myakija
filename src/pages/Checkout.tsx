import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { RootState } from '../store';
import { clearCart } from '../store/cartSlice';

interface CheckoutForm {
  organization: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  comment: string;
}

interface Order {
  orderNumber: number;
  customer: CheckoutForm;
  items: any[];
  total: number;
  date: Date;
}

  const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderNumber, setOrderNumber] = useState<number>(1);

  // Загрузка данных при монтировании
  useEffect(() => {
    try {
      const savedOrders = localStorage.getItem('orders');
      const savedOrderNumber = localStorage.getItem('orderNumber');
      
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      }
      if (savedOrderNumber) {
        const parsed = parseInt(savedOrderNumber, 10);
        if (!isNaN(parsed)) {
          setOrderNumber(parsed);
        }
      }
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
    }
  }, []);

  const addOrder = useCallback((order: Omit<Order, 'orderNumber'>) => {
    const newOrder: Order = {
      ...order,
      orderNumber: orderNumber
    };

    const newOrders = [...orders, newOrder];
    const newOrderNumber = orderNumber + 1;

    setOrders(newOrders);
    setOrderNumber(newOrderNumber);

    // Сохраняем в localStorage
    try {
      localStorage.setItem('orders', JSON.stringify(newOrders));
      localStorage.setItem('orderNumber', newOrderNumber.toString());
    } catch (error) {
      console.error('Ошибка сохранения данных:', error);
    }

    return orderNumber;
  }, [orders, orderNumber]);

  return { orders, orderNumber, addOrder };
};

const Checkout: React.FC = () => {

  const { addOrder } = useOrders();
  const { items, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [orderSuccess, setOrderSuccess] = useState<{success: boolean; orderNumber?: number}>({success: false});

  useEffect(() => {
    if (orderSuccess.success) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [orderSuccess.success]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<CheckoutForm>();

   const onSubmit = (data: CheckoutForm) => {
    const orderNumber = addOrder({
      customer: data,
      items: [...items],
      total: total,
      date: new Date()
    });
    
    setOrderSuccess({ success: true, orderNumber });

    dispatch(clearCart());
    reset();
  };

    if (orderSuccess.success) {
    return (
      <div className="container mx-auto mt-20 px-4 py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#f8f9f7] rounded-lg shadow-md border border-[#b3c1a7] p-8 mb-6">
            <h1 className="text-4xl font-normal mb-4 text-[#252422] tracking-tight">
              Ваш заказ №{orderSuccess.orderNumber}
            </h1>
            <p className="text-lg text-[#252422] font-light mb-6 tracking-wide">
              Мы свяжемся с Вами после его обработки, обычно это занимает несколько часов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#252422] text-[#b3c1a7] px-6 py-2 rounded-lg text-lg font-light hover:bg-[#2a2a28] transition-colors inline-block tracking-wider uppercase"
                  onClick={() => setOrderSuccess({ success: false })}>
                  Вернуться к продукции
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

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
      <h1 className="text-4xl font-normal mb-8 text-[#252422] tracking-tight">Оформление заказа</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block font-normal text-[#252422] mb-2 tracking-wide">
                Название организации
              </label>
                <input
                  {...register('organization')}
                  className="text-base font-light w-full px-3 py-2 border border-[#b3c1a7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#849c8c] text-[#252422] tracking-wide"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-normal text-[#252422] mb-2 tracking-wide">
                  Имя *
                </label>
                <input
                  {...register('firstName', { required: 'Обязательное поле' })}
                  className="text-base font-light w-full px-3 py-2 border border-[#b3c1a7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#849c8c] text-[#252422] tracking-wide"
                />
                {errors.firstName && (
                  <p className="text-[#dd7f20] text-sm mt-1 tracking-wide">{errors.firstName.message}</p>
                )}
              </div>
              
              <div>
                <label className="block font-normal text-[#252422] mb-2 tracking-wide">
                  Фамилия *
                </label>
                <input
                  {...register('lastName', { required: 'Обязательное поле' })}
                  className="text-base font-light w-full px-3 py-2 border border-[#b3c1a7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#849c8c] text-[#252422] tracking-wide"
                />
                {errors.lastName && (
                  <p className="text-[#dd7f20] text-sm mt-1 tracking-wide">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block font-normal text-[#252422] mb-2 tracking-wide">
                Email *
              </label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Обязательное поле',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Некорректный email'
                  }
                })}
                className="text-base font-light w-full px-3 py-2 border border-[#b3c1a7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#849c8c] text-[#252422] tracking-wide"
              />
              {errors.email && (
                <p className="text-[#dd7f20] text-sm mt-1 tracking-wide">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block font-normal text-[#252422] mb-2 tracking-wide">
                Телефон *
              </label>
              <input
                {...register('phone', { 
                  required: 'Обязательное поле',
                  pattern: {
                    value: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
                    message: 'Некорректный номер телефона'
                  }
                })}
                className="text-base font-light w-full px-3 py-2 border border-[#b3c1a7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#849c8c] text-[#252422] tracking-wide"
              />
              {errors.phone && (
                <p className="text-[#dd7f20] text-sm mt-1 tracking-wide">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block font-normal text-[#252422] mb-2 tracking-wide">
                Адрес доставки *
              </label>
              <textarea
                {...register('address', { required: 'Обязательное поле' })}
                rows={3}
                className="text-base font-light w-full px-3 py-2 border border-[#b3c1a7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#849c8c] text-[#252422] tracking-wide"
              />
              {errors.address && (
                <p className="text-[#dd7f20] text-sm mt-1 tracking-wide">{errors.address.message}</p>
              )}
            </div>

            <div>
              <label className="block font-normal text-[#252422] mb-2 tracking-wide">
                Комментарий к заказу
              </label>
              <textarea
                {...register('comment')}
                rows={3}
                className="text-base font-light w-full px-3 py-2 border border-[#b3c1a7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#849c8c] text-[#252422] tracking-wide"
              />
            </div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#252422] text-[#b3c1a7] px-6 py-2 rounded-lg text-lg font-light hover:bg-[#2a2a28] transition-colors inline-block tracking-wider uppercase"
            >
              Подтвердить заказ
            </motion.button>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-h-[350px] bg-[#f8f9f7] p-6 rounded-lg border border-[#b3c1a7] shadow-md"
        >
          <h2 className="text-lg font-normal mb-4 text-[#252422] tracking-wide">Ваш заказ</h2>
          <div className="space-y-3 mb-6">
            {items.map(item => (
              <div key={item.product.id} className="flex justify-between text-[#252422] font-light tracking-wide">
                {/* <span>
                  {item.product.name} × {item.quantity}
                </span> */}

                <span>{item.product.name}</span>
                {/* <span>{item.product.price * item.quantity} ₽</span> */}
                <span>{item.quantity} уп</span>
              </div>
            ))}
          </div>
          {/* <div className="border-t border-[#b3c1a7] pt-3">
            <div className="flex justify-between text-lg font-normal text-[#252422] tracking-tight">
              <span>Итого</span>
              <span className="text-[#dd7f20]">{total} ₽</span>
            </div>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;