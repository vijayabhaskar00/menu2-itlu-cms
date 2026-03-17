export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  status: 'available' | 'unavailable' | 'hidden' | 'coming-soon' | 'seasonal';
  isGlutenFree?: boolean;
  isVegan?: boolean;
}

export interface SubCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface Category {
  id: string;
  name: string;
  subCategories: SubCategory[];
}
