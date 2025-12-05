import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface SubCategoryFormProps {
  subCategory: any;
  onSave: (data: { id: string; name: string }) => void;
  onCancel: () => void;
}

function SubCategoryForm({ subCategory, onSave, onCancel }: SubCategoryFormProps) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (subCategory) {
      setId(subCategory.id);
      setName(subCategory.name);
    }
  }, [subCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id.trim() && name.trim()) {
      onSave({ id: id.trim(), name: name.trim() });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 modal-overlay">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md modal-content border border-gray-100">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {subCategory ? 'Edit Subcategory' : 'Add Subcategory'}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              {subCategory ? 'Update subcategory details' : 'Create a new subcategory'}
            </p>
          </div>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition-all duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label htmlFor="id" className="block text-sm font-bold text-gray-800 mb-2">
              Subcategory ID
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              disabled={!!subCategory}
              className="form-input w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-500 bg-gray-50 hover:bg-white"
              placeholder="e.g., hot-appetizers"
              required
            />
            <p className="text-xs text-gray-500 mt-1.5">Unique identifier for this subcategory</p>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-2">
              Subcategory Name
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white"
              placeholder="e.g., Hot Appetizers"
              required
            />
            <p className="text-xs text-gray-500 mt-1.5">Display name for customers</p>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
            >
              {subCategory ? 'Update Subcategory' : 'Create Subcategory'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubCategoryForm;
