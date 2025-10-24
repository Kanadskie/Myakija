import React from 'react';
import { FilterState } from '../types';

interface ProductFilterProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ filters, onFilterChange }) => {
  const handleChange = (key: keyof FilterState, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };

  return (

    <div className="p-6 mb-6 bg-[#f8f9f7] rounded-lg border border-[#b3c1a7] shadow-md">      
      <div className="space-y-4">
        <div>
          <label className="block font-light text-[#252422] mb-2 tracking-wide">
            По названию
          </label>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => handleChange('search', e.target.value)}
            placeholder="Введите название..."
            className="text-base font-light w-full px-3 py-2 border border-[#b3c1a7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#849c8c] text-[#252422] tracking-wide"
          />
        </div>

        <div>
          <label className="block font-light text-[#252422] mb-2 tracking-wide">
            Тип воды
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleChange('category', e.target.value)}
            className="text-base font-light w-full px-3 py-2 border border-[#b3c1a7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#849c8c] text-[#252422] tracking-wide"
          >
            <option value="">Все типы</option>
            <option value="drinking">Питьевая</option>
            <option value="mineral">Минеральная</option>
          </select>
        </div>

        <div>
          <label className="block font-light text-[#252422] mb-2 tracking-wide">
            Объем
          </label>
          <select
            value={filters.volume}
            onChange={(e) => handleChange('volume', e.target.value)}
            className="text-base font-light w-full px-3 py-2 border border-[#b3c1a7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#849c8c] text-[#252422] tracking-wide"
          >
            <option value="">Все объемы</option>
            <option value="0.33 л">0.33 л</option>
            <option value="0.5 л">0.5 л</option>
            <option value="1.5 л">1.5 л</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;