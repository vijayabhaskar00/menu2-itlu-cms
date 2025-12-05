import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Upload, Trash2, Plus } from "lucide-react"

interface MenuItemFormProps {
  item: any
  onSave: (data: any) => void
  onCancel: () => void
}

function MenuItemForm({ item, onSave, onCancel }: MenuItemFormProps) {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState("")
  const [status, setStatus] = useState<"available" | "unavailable" | "hidden" | "seasonal" | "coming-soon">("available")
  const [timings, setTimings] = useState([{ startTime: "", endTime: "" }])

  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (item) {
      setId(item.id)
      setName(item.name)
      setDescription(item.description || "")
      setPrice(item.price.toString())
      setImagePreview(item.image || "")
      setImageFile(null)
      setStatus(item.status)

      if (item.timings && item.timings.length > 0) {
        setTimings(item.timings)
      } else {
        setTimings([{ startTime: "", endTime: "" }])
      }
    }
  }, [item])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setImageFile(null)
    setImagePreview("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleAddTiming = () => {
    setTimings([...timings, { startTime: "", endTime: "" }])
  }

  const handleRemoveTiming = (index: number) => {
    if (timings.length > 1) {
      const updated = timings.filter((_, i) => i !== index)
      setTimings(updated)
    }
  }

  const handleTimingChange = (index: number, field: "startTime" | "endTime", value: string) => {
    const updated = [...timings]
    updated[index][field] = value
    setTimings(updated)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const validTimings = timings.filter((t) => t.startTime.trim() && t.endTime.trim())

    if (id.trim() && name.trim() && price) {
      onSave({
        id: id.trim(),
        name: name.trim(),
        description: description.trim(),
        price: Number.parseFloat(price),
        image: imageFile || imagePreview,
        status,
        timings: validTimings.length > 0 ? validTimings : [{ startTime: "", endTime: "" }],
      })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-slate-50 to-slate-100 px-8 py-6 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{item ? "Edit Menu Item" : "Add Menu Item"}</h1>
            <p className="text-sm text-slate-600 mt-1">
              {item ? "Update the details below" : "Create a new menu item"}
            </p>
          </div>
          <button onClick={onCancel} className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-slate-600">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">Item Image</label>
            <input
              ref={fileInputRef}
              type="file"
              id="image"
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />

            {imagePreview ? (
              <div className="space-y-3">
                <div className="relative rounded-xl overflow-hidden border-2 border-slate-200">
                  <img src={imagePreview || "/placeholder.svg"} alt="Preview" className="w-full h-48 object-cover" />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-lg"
                  >
                    <X size={18} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-3 px-4 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors border border-slate-300 font-semibold text-sm"
                >
                  Change Image
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-10 px-4 border-2 border-dashed border-slate-300 rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all flex flex-col items-center justify-center gap-3 cursor-pointer group"
              >
                <Upload className="w-8 h-8 text-slate-400 group-hover:text-slate-600 transition-colors" />
                <span className="text-sm font-semibold text-slate-700">Click to upload image</span>
                <span className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="id" className="block text-sm font-semibold text-slate-900 mb-2">
                Item ID
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                disabled={!!item}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-500 transition-all"
                placeholder="e.g., spring-rolls"
                required
              />
              <p className="text-xs text-slate-500 mt-2">Unique identifier for this item</p>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                Item Name
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="e.g., Spring Rolls"
                required
              />
              <p className="text-xs text-slate-500 mt-2">Display name on the menu</p>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-slate-900 mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="e.g., Crispy vegetable spring rolls served with sweet chili sauce"
                rows={3}
              />
              <p className="text-xs text-slate-500 mt-2">Brief description for customers</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="price" className="block text-sm font-semibold text-slate-900 mb-2">
                Price
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-slate-600 font-semibold">$</span>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-semibold text-slate-900 mb-2">
                Status
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value as "available" | "unavailable" | "hidden" | "seasonal" | "coming-soon")}
                className="w-full py-3 px-4 rounded-lg font-medium text-sm transition-all border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
                <option value="hidden">Hidden</option>
                <option value="seasonal">Seasonal</option>
                <option value="coming-soon">Coming Soon</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <label className="block text-sm font-semibold text-slate-900">Available Timings</label>
                <p className="text-xs text-slate-500 mt-1">Specify when this item is available</p>
              </div>
            </div>

            <div className="space-y-3">
              {timings.map((t, index) => (
                <div key={index} className="flex gap-3 items-end">
                  <input
                    type="text"
                    placeholder="Start (e.g., 11:30 AM)"
                    value={t.startTime}
                    onChange={(e) => handleTimingChange(index, "startTime", e.target.value)}
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />

                  <input
                    type="text"
                    placeholder="End (e.g., 2:30 PM)"
                    value={t.endTime}
                    onChange={(e) => handleTimingChange(index, "endTime", e.target.value)}
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />

                  {timings.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveTiming(index)}
                      className="p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-red-200"
                      title="Remove this timing"
                    >
                      <Trash2 size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors"
              onClick={handleAddTiming}
            >
              <Plus size={18} />
              Add More Timings
            </button>
          </div>

          <div className="flex gap-4 pt-6 border-t border-slate-200">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-all font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              {item ? "Update Item" : "Create Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MenuItemForm
