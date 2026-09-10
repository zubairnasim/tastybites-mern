import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import api from '../../services/api'

function EditMenuItem() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Starter',
    price: '',
    availability: true
  })

  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await api.get(`/menu-items/${id}`)
        const item = response.data.menuItem

        setFormData({
          name: item.name,
          description: item.description,
          category: item.category,
          price: item.price,
          availability: item.availability
        })

        setPreview(item.image || '')
      } catch (error) {
        console.error('Failed to load item:', error)
        setError('Unable to load menu item.')
      } finally {
        setLoading(false)
      }
    }

    fetchItem()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    if (!file) return

    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setSaving(true)
      setError('')

      const data = new FormData()

      data.append('name', formData.name)
      data.append('description', formData.description)
      data.append('category', formData.category)
      data.append('price', formData.price)
      data.append('availability', formData.availability)

      if (image) {
        data.append('image', image)
      }

      const token = localStorage.getItem('tastybites_token')

      await api.put(`/menu-items/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      navigate('/admin/menu-items')
    } catch (error) {
      console.error('Failed to update item:', error)

      setError(
        error.response?.data?.message ||
        'Failed to update menu item.'
      )
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-yellow-300 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin" />
          <p className="mt-4 text-sm uppercase font-bold">
            Loading item...
          </p>
        </div>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-yellow-300 text-black">




      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12">

        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] font-bold">
            Administration
          </p>

          <h1 className="text-6xl sm:text-7xl font-black uppercase tracking-[-0.07em] leading-[0.8] mt-4">
            Edit Item
          </h1>
        </div>


        {error && (
          <div className="border-2 border-black bg-red-500 text-white px-5 py-4 mb-8 text-sm font-bold">
            {error}
          </div>
        )}


        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-2 gap-10"
        >

          {/* Form */}
          <div className="space-y-6">

            <div>
              <label className="block text-xs uppercase font-bold mb-2">
                Item Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-2 border-black bg-transparent px-5 py-4 outline-none focus:bg-white transition"
              />
            </div>


            <div>
              <label className="block text-xs uppercase font-bold mb-2">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border-2 border-black bg-transparent px-5 py-4 outline-none focus:bg-white transition resize-none"
              />
            </div>


            <div>
              <label className="block text-xs uppercase font-bold mb-2">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border-2 border-black bg-yellow-300 px-5 py-4 outline-none"
              >
                <option value="Starter">Starter</option>
                <option value="Main Course">Main Course</option>
                <option value="Dessert">Dessert</option>
                <option value="Beverage">Beverage</option>
              </select>
            </div>


            <div>
              <label className="block text-xs uppercase font-bold mb-2">
                Price (₹)
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="w-full border-2 border-black bg-transparent px-5 py-4 outline-none focus:bg-white transition"
              />
            </div>


            <div>
              <label className="block text-xs uppercase font-bold mb-2">
                Availability
              </label>

              <select
                name="availability"
                value={String(formData.availability)}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    availability: e.target.value === 'true'
                  })
                }
                className="w-full border-2 border-black bg-yellow-300 px-5 py-4 outline-none"
              >
                <option value="true">In Stock</option>
                <option value="false">Out of Stock</option>
              </select>
            </div>

          </div>


          {/* Image */}
          <div>

            <label className="block text-xs uppercase font-bold mb-2">
              Food Image
            </label>

            <label className="block border-2 border-dashed border-black cursor-pointer hover:bg-white transition overflow-hidden">

              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full aspect-square object-cover"
                />
              ) : (
                <div className="aspect-square flex flex-col items-center justify-center">
                  <i className="ri-image-add-line text-5xl mb-4" />
                  <p className="font-black uppercase">
                    Upload Image
                  </p>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />

            </label>


            <button
              type="submit"
              disabled={saving}
              className="w-full mt-6 bg-black text-yellow-300 py-4 text-sm uppercase font-black hover:bg-white hover:text-black transition disabled:opacity-50"
            >
              {saving ? 'Saving Changes...' : 'Save Changes ↗'}
            </button>

            <Link
              to="/admin/menu-items"
              className="block text-center mt-5 text-xs uppercase font-bold hover:opacity-60"
            >
              Cancel
            </Link>

          </div>

        </form>

      </div>

    </div>
  )
}

export default EditMenuItem