import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { FilterState } from '../types';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import { motion } from 'framer-motion';

const Products: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    volume: '',
    search: ''
  });

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesVolume = !filters.volume || product.volume === filters.volume;
      
      return matchesSearch && matchesCategory && matchesVolume;
    });
  }, [filters]);

  return (
    <div className="container mx-auto mt-12 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto"
      >
      <h1 className="text-4xl font-normal mb-8 text-[#252422] tracking-tight">Продукция</h1>
      <h2 className="text-2xl font-normal text-[#252422] tracking-wide mb-4">Поиск</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductFilter filters={filters} onFilterChange={setFilters} />
        </div>
        
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-4xl text-[#252422] tracking-wide mb-4">Товары не найдены</p>
              <p className="font-light text-[#252422] tracking-wide">Попробуйте изменить параметры фильтрации</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default Products;