import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, ChevronDown, ChevronRight, Loader } from 'lucide-react';
import {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  addSubCategory,
  updateSubCategory,
  deleteSubCategory,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem
} from '../services/api';
import { Category } from '../types/menu';
import CategoryForm from './CategoryForm';
import SubCategoryForm from './SubCategoryForm';
import MenuItemForm from './MenuItemForm';
import Logo from "@/logo.png"; // adjust path if needed

function MenuManagement() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [expandedSubCategories, setExpandedSubCategories] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showSubCategoryForm, setShowSubCategoryForm] = useState(false);
  const [showItemForm, setShowItemForm] = useState(false);

  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editingSubCategory, setEditingSubCategory] = useState<{ categoryId: string; subCategory: any } | null>(null);
  const [editingItem, setEditingItem] = useState<{ categoryId: string; subCategoryId: string; item: any } | null>(null);

  const [selectedCategoryForSub, setSelectedCategoryForSub] = useState<string | null>(null);
  const [selectedSubForItem, setSelectedSubForItem] = useState<{ categoryId: string; subCategoryId: string } | null>(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setLoading(true);
    const data = await getAllCategories();
    setCategories(data);
    setLoading(false);
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  const toggleSubCategory = (subCategoryId: string) => {
    setExpandedSubCategories(prev => {
      const next = new Set(prev);
      if (next.has(subCategoryId)) {
        next.delete(subCategoryId);
      } else {
        next.add(subCategoryId);
      }
      return next;
    });
  };

  const handleAddCategory = () => {
    setEditingCategory(null);
    setShowCategoryForm(true);
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setShowCategoryForm(true);
  };

  const handleDeleteCategory = async (categoryId: string) => {
    if (window.confirm('Are you sure you want to delete this category and all its contents?')) {
      setDeleting(categoryId);
      await deleteCategory(categoryId);
      await loadCategories();
      setDeleting(null);
    }
  };

  const handleSaveCategory = async (data: any) => {
    if (editingCategory) {
      await updateCategory(editingCategory.id, data);
    } else {
      await addCategory(data);
    }
    setShowCategoryForm(false);
    loadCategories();
  };

  const handleAddSubCategory = (categoryId: string) => {
    setSelectedCategoryForSub(categoryId);
    setEditingSubCategory(null);
    setShowSubCategoryForm(true);
  };

  const handleEditSubCategory = (categoryId: string, subCategory: any) => {
    setSelectedCategoryForSub(categoryId);
    setEditingSubCategory({ categoryId, subCategory });
    setShowSubCategoryForm(true);
  };

  const handleDeleteSubCategory = async (categoryId: string, subCategoryId: string) => {
    if (window.confirm('Are you sure you want to delete this subcategory and all its items?')) {
      setDeleting(subCategoryId);
      await deleteSubCategory(categoryId, subCategoryId);
      await loadCategories();
      setDeleting(null);
    }
  };

  const handleSaveSubCategory = async (data: any) => {
    if (editingSubCategory) {
      await updateSubCategory(
        editingSubCategory.categoryId,
        editingSubCategory.subCategory.id,
        data
      );
    } else if (selectedCategoryForSub) {
      await addSubCategory(selectedCategoryForSub, data);
    }
    setShowSubCategoryForm(false);
    loadCategories();
  };

  const handleAddItem = (categoryId: string, subCategoryId: string) => {
    setSelectedSubForItem({ categoryId, subCategoryId });
    setEditingItem(null);
    setShowItemForm(true);
  };

  const handleEditItem = (categoryId: string, subCategoryId: string, item: any) => {
    setSelectedSubForItem({ categoryId, subCategoryId });
    setEditingItem({ categoryId, subCategoryId, item });
    setShowItemForm(true);
  };

  const handleDeleteItem = async (categoryId: string, subCategoryId: string, itemId: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setDeleting(itemId);
      await deleteMenuItem(categoryId, subCategoryId, itemId);
      await loadCategories();
      setDeleting(null);
    }
  };

  const handleSaveItem = async (data: any) => {
    if (editingItem) {
      await updateMenuItem(
        editingItem.categoryId,
        editingItem.subCategoryId,
        editingItem.item.id,
        data
      );
    } else if (selectedSubForItem) {
      await addMenuItem(
        selectedSubForItem.categoryId,
        selectedSubForItem.subCategoryId,
        data
      );
    }
    setShowItemForm(false);
    loadCategories();
  };

  const handleChangeItemStatus = async (categoryId: string, subCategoryId: string, item: any, newStatus: 'available' | 'unavailable' | 'hidden') => {
    await updateMenuItem(categoryId, subCategoryId, item.id, {
      ...item,
      status: newStatus
    });
    loadCategories();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 animate-fade-in bg-white p-5 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-12 h-12 object-contain bg-black"
              />
              <h1 className="text-4xl font-bold text-black">Menu Management</h1>
            </div>

            <button
              onClick={handleAddCategory}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus size={20} />
              <span className="font-semibold">Add Category</span>
            </button>
          </div>

          <p className="text-blue-800 text-sm">Manage your restaurant menu structure with ease</p>
        </div>

        <div className="bg-white bg-opacity-95 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm border border-white border-opacity-20">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24">
              <Loader className="w-12 h-12 text-blue-600 animate-spin-slow mb-4" />
              <p className="text-gray-600 font-medium">Loading menu data...</p>
            </div>
          ) : categories.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="mb-4">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <Plus className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Categories Yet</h3>
              <p className="text-gray-600 mb-6">Get started by creating your first menu category</p>
              <button
                onClick={handleAddCategory}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold"
              >
                Create First Category
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {categories.map((category, idx) => (
                <div
                  key={category.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-4 hover:from-slate-100 hover:to-blue-100 transition-colors duration-200 cursor-pointer"
                    onClick={() => toggleCategory(category.id)}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex-shrink-0">
                          {expandedCategories.has(category.id) ? (
                            <ChevronDown className="w-5 h-5 text-blue-600" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h2 className="text-lg font-bold text-gray-900">{category.name}</h2>
                          <p className="text-sm text-gray-500 mt-0.5">
                            {category.subCategories?.length || 0} subcategories
                            {category.subCategories?.reduce((sum, sc) => sum + (sc.items?.length || 0), 0) > 0 &&
                              ` • ${category.subCategories.reduce((sum, sc) => sum + (sc.items?.length || 0), 0)} items`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => handleAddSubCategory(category.id)}
                          className="px-3 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 font-medium"
                        >
                          + Sub
                        </button>
                        <button
                          onClick={() => handleEditCategory(category)}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(category.id)}
                          disabled={deleting === category.id}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200 disabled:opacity-50"
                        >
                          {deleting === category.id ? (
                            <Loader size={18} className="animate-spin" />
                          ) : (
                            <Trash2 size={18} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {expandedCategories.has(category.id) && (
                    <div className="animate-slide-down bg-white">
                      <div className="px-6 py-4">
                        {category.subCategories?.length === 0 ? (
                          <div className="text-center py-8 text-gray-500">
                            <p className="text-sm">No subcategories yet</p>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {category.subCategories?.map((subCategory, subIdx) => (
                              <div
                                key={subCategory.id}
                                className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors duration-200"
                                style={{ animationDelay: `${subIdx * 0.05}s` }}
                              >
                                <div
                                  className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 flex items-center justify-between hover:from-blue-50 hover:to-blue-100 transition-colors duration-200 cursor-pointer"
                                  onClick={() => toggleSubCategory(subCategory.id)}
                                >
                                  <div className="flex items-center gap-3 flex-1">
                                    <div className="flex-shrink-0">
                                      {expandedSubCategories.has(subCategory.id) ? (
                                        <ChevronDown className="w-4 h-4 text-blue-600" />
                                      ) : (
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                      )}
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-gray-900">{subCategory.name}</h3>
                                      <p className="text-xs text-gray-500 mt-0.5">{subCategory.items?.length || 0} items</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                                    <button
                                      onClick={() => handleAddItem(category.id, subCategory.id)}
                                      className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-200 font-medium"
                                    >
                                      + Item
                                    </button>
                                    <button
                                      onClick={() => handleEditSubCategory(category.id, subCategory)}
                                      className="p-1.5 text-blue-600 hover:bg-blue-100 rounded transition-colors duration-200"
                                    >
                                      <Pencil size={16} />
                                    </button>
                                    <button
                                      onClick={() => handleDeleteSubCategory(category.id, subCategory.id)}
                                      disabled={deleting === subCategory.id}
                                      className="p-1.5 text-red-600 hover:bg-red-100 rounded transition-colors duration-200 disabled:opacity-50"
                                    >
                                      {deleting === subCategory.id ? (
                                        <Loader size={16} className="animate-spin" />
                                      ) : (
                                        <Trash2 size={16} />
                                      )}
                                    </button>
                                  </div>
                                </div>

                                {expandedSubCategories.has(subCategory.id) && (
                                  <div className="animate-slide-down bg-white px-4 py-3 border-t border-gray-200">
                                    {subCategory.items?.length === 0 ? (
                                      <div className="text-center py-6 text-gray-500">
                                        <p className="text-sm">No items yet</p>
                                      </div>
                                    ) : (
                                      <div className="grid gap-3">
                                        {subCategory.items?.map((item, itemIdx) => (
                                          <div
                                            key={item.id}
                                            className="flex items-start gap-4 p-4 bg-gradient-to-r from-slate-50 to-blue-50 border border-gray-200 rounded-lg hover:from-slate-100 hover:to-blue-100 transition-all duration-200 hover:shadow-md"
                                            style={{ animationDelay: `${itemIdx * 0.05}s` }}
                                          >
                                            {item.image && (
                                              <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded-lg flex-shrink-0 shadow-md"
                                              />
                                            )}
                                            <div className="flex-1 min-w-0">
                                              <div className="flex items-start justify-between mb-1">
                                                <h4 className="font-bold text-gray-900 text-base">{item.name}</h4>
                                                <span className="text-lg font-bold text-blue-600 ml-2 flex-shrink-0">
                                                  ${item.price.toFixed(2)}
                                                </span>
                                              </div>
                                              {item.description && (
                                                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                                              )}
                                            </div>
                                            <div className="flex items-center gap-2 flex-shrink-0">
                                             
                                              <button
                                                onClick={() => handleEditItem(category.id, subCategory.id, item)}
                                                className="p-2 hover:bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                                              >
                                                <Pencil size={16} />
                                              </button>
                                              <button
                                                onClick={() => handleDeleteItem(category.id, subCategory.id, item.id)}
                                                disabled={deleting === item.id}
                                                className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200 disabled:opacity-50"
                                              >
                                                {deleting === item.id ? (
                                                  <Loader size={16} className="animate-spin" />
                                                ) : (
                                                  <Trash2 size={16} />
                                                )}
                                              </button>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showCategoryForm && (
        <CategoryForm
          category={editingCategory}
          onSave={handleSaveCategory}
          onCancel={() => setShowCategoryForm(false)}
        />
      )}

      {showSubCategoryForm && (
        <SubCategoryForm
          subCategory={editingSubCategory?.subCategory}
          onSave={handleSaveSubCategory}
          onCancel={() => setShowSubCategoryForm(false)}
        />
      )}

      {showItemForm && (
        <MenuItemForm
          item={editingItem?.item}
          onSave={handleSaveItem}
          onCancel={() => setShowItemForm(false)}
        />
      )}
    </div>
  );
}

export default MenuManagement;
