// const API_BASE_URL = 'https://menu-itlu-backend.onrender.com';
// const API_BASE_URL = 'http://13.48.48.117:5500';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllCategories = async () => {
  const response = await fetch(`${API_BASE_URL}/categories`);
  return response.json();
};

export const addCategory = async (data: { id: string; name: string }) => {
  const response = await fetch(`${API_BASE_URL}/categories`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const updateCategory = async (categoryId: string, data: { name: string }) => {
  const response = await fetch(`${API_BASE_URL}/categories/${categoryId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteCategory = async (categoryId: string) => {
  const response = await fetch(`${API_BASE_URL}/categories/${categoryId}`, {
    method: 'DELETE',
  });
  return response.json();
};

export const addSubCategory = async (categoryId: string, data: { id: string; name: string }) => {
  const response = await fetch(`${API_BASE_URL}/categories/${categoryId}/subcategories`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const updateSubCategory = async (
  categoryId: string,
  subCategoryId: string,
  data: { id: string; name: string }
) => {
  const response = await fetch(
    `${API_BASE_URL}/categories/${categoryId}/subcategories/${subCategoryId}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

export const deleteSubCategory = async (categoryId: string, subCategoryId: string) => {
  const response = await fetch(
    `${API_BASE_URL}/categories/${categoryId}/subcategories/${subCategoryId}`,
    {
      method: 'DELETE',
    }
  );
  return response.json();
};

export const addMenuItem = async (
  categoryId: string,
  subCategoryId: string,
  data: {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: File | string;
    status: 'available' | 'unavailable' | 'hidden';
    timings: Array<{ startTime: string; endTime: string }>;
  }
) => {
  const formData = new FormData();
  formData.append('id', data.id);
  formData.append('name', data.name);
  formData.append('description', data.description);
  formData.append('price', data.price.toString());
  formData.append('status', data.status);
  
  // Convert timings array to JSON string
  formData.append('timings', JSON.stringify(data.timings));

  if (data.image instanceof File) {
    formData.append('image', data.image);
  }

  const response = await fetch(
    `${API_BASE_URL}/categories/${categoryId}/subcategories/${subCategoryId}/items`,
    {
      method: 'POST',
      body: formData,
    }
  );
  return response.json();
};

export const updateMenuItem = async (
  categoryId: string,
  subCategoryId: string,
  itemId: string,
  data: {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: File | string;
    status: 'available' | 'unavailable' | 'hidden';
    timings: Array<{ startTime: string; endTime: string }>;
  }
) => {
  const formData = new FormData();
  formData.append('id', data.id);
  formData.append('name', data.name);
  formData.append('description', data.description);
  formData.append('price', data.price.toString());
  formData.append('status', data.status);
  
  // Convert timings array to JSON string
  formData.append('timings', JSON.stringify(data.timings));

  if (data.image instanceof File) {
    formData.append('image', data.image);
  } else if (typeof data.image === 'string') {
    formData.append('image', data.image);
  }

  const response = await fetch(
    `${API_BASE_URL}/categories/${categoryId}/subcategories/${subCategoryId}/items/${itemId}`,
    {
      method: 'PUT',
      body: formData,
    }
  );
  return response.json();
};

export const deleteMenuItem = async (
  categoryId: string,
  subCategoryId: string,
  itemId: string
) => {
  const response = await fetch(
    `${API_BASE_URL}/categories/${categoryId}/subcategories/${subCategoryId}/items/${itemId}`,
    {
      method: 'DELETE',
    }
  );
  return response.json();
};

// Login API
export const login = async (username: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

// Type definitions for better type safety
export interface Timing {
  startTime: string;
  endTime: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: File | string;
  status: 'available' | 'unavailable' | 'hidden';
  timings: Timing[];
}