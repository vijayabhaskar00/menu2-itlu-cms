'use client';

import { menuCategories } from '@/data/menu-data';
import MenuItem from './menu-item';

interface MenuGridProps {
  category: string;
  subCategory: string;
}

export default function MenuGrid({ category, subCategory }: MenuGridProps) {
  const currentCategory = menuCategories.find(cat => cat.id === category);
  const currentSubCategory = currentCategory?.subCategories.find(
    sub => sub.id === subCategory
  );

  const items = currentSubCategory?.items || [];

  return (
    <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-b from-amber-50 to-white min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-6 lg:gap-7">
        {items.map((item) => (
          <div key={item.id} className="animate-fade-in">
            <MenuItem item={item} />
          </div>
        ))}
      </div>
      
      {items.length === 0 && (
        <div className="flex items-center justify-center py-16">
          <p className="text-gray-400 text-lg">No items available in this category</p>
        </div>
      )}
    </div>
  );
}
