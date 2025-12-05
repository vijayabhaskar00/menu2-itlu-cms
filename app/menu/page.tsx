'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/header';
import CategoryNav from '@/components/category-nav';
import MenuGrid from '@/components/menu-grid';
import { menuCategories } from '@/data/menu-data';

function MenuContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory(menuCategories[0]?.id || 'signature');
    }
  }, [categoryFromUrl]);

  useEffect(() => {
    if (selectedCategory) {
      const category = menuCategories.find(cat => cat.id === selectedCategory);
      if (category && category.subCategories.length > 0) {
        setSelectedSubCategory(category.subCategories[0].id);
      }
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [selectedCategory]);

  if (selectedCategory === null) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-pulse text-amber-700">Loading menu...</div>
      </div>
    );
  }

  return (
    <>
      <CategoryNav 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory}
        selectedSubCategory={selectedSubCategory || ''}
        onSubCategoryChange={setSelectedSubCategory}
      />
      
      <div className="flex-1 overflow-auto">
        {isLoading ? (
          <div className="p-6 bg-gradient-to-b from-amber-50 to-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm animate-pulse">
                  <div className="h-48 sm:h-56 bg-gradient-to-r from-amber-100 to-amber-50"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                    <div className="flex justify-between">
                      <div className="h-5 bg-amber-100 rounded w-16"></div>
                      <div className="h-5 bg-green-100 rounded w-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <MenuGrid 
            category={selectedCategory}
            subCategory={selectedSubCategory || ''}
          />
        )}
      </div>
    </>
  );
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col">
      <Header showBackButton={true} />
      
      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse text-amber-700">Loading menu...</div>
        </div>
      }>
        <MenuContent />
      </Suspense>
    </div>
  );
}