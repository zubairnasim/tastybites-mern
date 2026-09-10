import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

function MenuItems() {
  const [menuItems, setMenuItems] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchMenuItems = async () => {
    try {
      setLoading(true)
      setError('')

      const response = await api.get('/menu-items')
      setMenuItems(response.data.menuItems)
    } catch (error) {
      console.error('Failed to fetch menu items:', error)
      setError('Unable to load menu items.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMenuItems()
  }, [])

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || item.category === category

    return matchesSearch && matchesCategory
  })

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this menu item?'
    )

    if (!confirmed) return

    try {
      const token = localStorage.getItem('tastybites_token')

      await api.delete(`/menu-items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setMenuItems((items) =>
        items.filter((item) => item._id !== id)
      )
    } catch (error) {
      console.error('Delete failed:', error)
      alert(
        error.response?.data?.message ||
        'Failed to delete menu item.'
      )
    }
  }

  return (
    <div className="min-h-screen bg-yellow-300 text-black">

      {/* Header */}



      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold">
              Administration
            </p>

            <h1 className="text-6xl sm:text-7xl font-black uppercase tracking-[-0.07em] leading-[0.8] mt-4">
              Menu Items
            </h1>
          </div>

          <Link
            to="/admin/add-menu-item"
            className="inline-flex items-center justify-center bg-black text-yellow-300 px-6 py-4 text-sm uppercase font-bold hover:bg-white hover:text-black transition"
          >
            + Add Menu Item
          </Link>

        </div>


        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">

          <input
            type="text"
            placeholder="Search menu items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border-2 border-black bg-transparent px-5 py-3 outline-none focus:bg-white transition"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-2 border-black bg-yellow-300 px-5 py-3 outline-none"
          >
            <option value="All">All Categories</option>
            <option value="Starter">Starter</option>
            <option value="Main Course">Main Course</option>
            <option value="Dessert">Dessert</option>
            <option value="Beverage">Beverage</option>
          </select>

        </div>


        {/* Loading */}
        {loading && (
          <div className="py-20 text-center">
            <div className="inline-block w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin" />

            <p className="mt-4 text-sm uppercase font-bold">
              Loading menu...
            </p>
          </div>
        )}


        {/* Error */}
        {!loading && error && (
          <div className="border-2 border-black bg-white p-8 text-center">
            <p className="font-black uppercase">
              {error}
            </p>
          </div>
        )}


        {/* Empty */}
        {!loading && !error && filteredItems.length === 0 && (
          <div className="border-2 border-black p-12 text-center">
            <p className="text-2xl font-black uppercase">
              No menu items found
            </p>

            <p className="text-sm opacity-60 mt-2">
              Try another search or add a new menu item.
            </p>
          </div>
        )}


        {/* Items */}
        {!loading && !error && filteredItems.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredItems.map((item) => (
              <article
                key={item._id}
                className="border-2 border-black bg-yellow-300 overflow-hidden"
              >

                {/* Image */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                ) : (
                  <div className="w-full aspect-[4/3] bg-black/10 flex items-center justify-center">
                    <span className="text-xs uppercase font-bold">
                      No Image
                    </span>
                  </div>
                )}

                {/* Details */}
                <div className="p-5">

                  <div className="flex justify-between gap-4">

                    <div>
                      <span className="text-[10px] uppercase font-bold opacity-60">
                        {item.category}
                      </span>

                      <h2 className="text-xl font-black uppercase mt-1">
                        {item.name}
                      </h2>
                    </div>

                    <p className="text-xl font-black">
                      ₹{item.price}
                    </p>

                  </div>

                  <p className="text-sm opacity-70 mt-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-4">

                    <span
                      className={`text-xs uppercase font-bold ${
                        item.availability
                          ? 'text-green-700'
                          : 'text-red-600'
                      }`}
                    >
                      ● {item.availability
                        ? 'In Stock'
                        : 'Out of Stock'}
                    </span>

                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-6">

                    <Link
                      to={`/admin/edit-menu-item/${item._id}`}
                      className="flex-1 border-2 border-black py-3 text-center text-xs uppercase font-bold hover:bg-white transition"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="flex-1 bg-black text-yellow-300 py-3 text-xs uppercase font-bold hover:bg-red-600 hover:text-white transition"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </div>
        )}

      </div>

    </div>
  )
}

export default MenuItems