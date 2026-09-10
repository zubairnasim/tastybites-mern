import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'

const categories = [
  'All',
  'Starter',
  'Main Course',
  'Dessert',
  'Beverage'
]

function MenuSection() {
  const [menuItems, setMenuItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Fetch menu items from backend
  useEffect(() => {
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

    fetchMenuItems()
  }, [])

  // Filter menu items by category
  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter(
          (item) => item.category === selectedCategory
        )

  return (
    <section
      id="menu"
      className="bg-yellow-300 text-black border-b-4 border-black"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

        {/* =================================
            SECTION HEADER
        ================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

          <div>

            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold mb-5">
              Our Menu
            </p>

            <h2
              className="
                text-7xl
                sm:text-8xl
                lg:text-[10rem]
                uppercase
                font-black
                tracking-[-0.08em]
                leading-[0.72]
              "
            >
              Eat
              <br />
              Good.
            </h2>

          </div>

          <p className="max-w-sm text-sm sm:text-base leading-relaxed">
            Fresh ingredients, bold flavours and dishes made with care.
            Find something delicious for every mood.
          </p>

        </div>


        {/* =================================
            CATEGORY FILTERS
        ================================= */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-hide">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                shrink-0
                px-5
                py-2.5
                rounded-full
                border-2
                border-black
                text-xs
                sm:text-sm
                uppercase
                font-bold
                transition-all
                duration-300
                ${
                  selectedCategory === category
                    ? 'bg-black text-yellow-300'
                    : 'bg-yellow-300 text-black hover:bg-white'
                }
              `}
            >
              {category}
            </button>

          ))}

        </div>


        {/* =================================
            LOADING STATE
        ================================= */}
        {loading && (
          <div className="py-20 text-center">

            <div className="inline-block w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin" />

            <p className="mt-4 text-sm uppercase font-bold">
              Loading menu...
            </p>

          </div>
        )}


        {/* =================================
            ERROR STATE
        ================================= */}
        {!loading && error && (
          <div className="border-2 border-black bg-white p-8 text-center">

            <p className="text-lg font-black uppercase">
              {error}
            </p>

            <p className="text-sm mt-2 opacity-70">
              Please make sure the backend server is running.
            </p>

          </div>
        )}


        {/* =================================
            EMPTY STATE
        ================================= */}
        {!loading && !error && filteredItems.length === 0 && (
          <div className="py-20 text-center">

            <p className="text-2xl font-black uppercase">
              No items found
            </p>

            <p className="text-sm mt-2 opacity-70">
              There are no menu items in this category yet.
            </p>

          </div>
        )}


        {/* =================================
            MENU GRID
        ================================= */}
        {!loading && !error && filteredItems.length > 0 && (

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

            {filteredItems.map((item) => (

              <article
                key={item._id}
                className="
                  group
                  bg-yellow-300
                  border-2
                  border-black
                  rounded-[2rem]
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:bg-white
                "
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        w-full
                        aspect-[4/3]
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  ) : (
                    <div className="w-full aspect-[4/3] bg-black/10 flex items-center justify-center">
                      <span className="text-xs uppercase font-bold">
                        No Image
                      </span>
                    </div>
                  )}

                  {/* Category */}
                  <span
                    className="
                      absolute
                      top-4
                      left-4
                      bg-black
                      text-yellow-300
                      px-3
                      py-1.5
                      rounded-full
                      text-[10px]
                      uppercase
                      font-bold
                      tracking-wide
                    "
                  >
                    {item.category}
                  </span>

                </div>


                {/* Content */}
                <div className="p-5">

                  <div className="flex items-start justify-between gap-4">

                    <h3 className="text-xl font-black uppercase leading-tight">
                      {item.name}
                    </h3>

                    <span className="shrink-0 text-lg font-black">
                      ₹{item.price}
                    </span>

                  </div>


                  <p className="text-xs sm:text-sm leading-relaxed mt-3 opacity-70">
                    {item.description}
                  </p>


                  {/* Availability */}
                  <div className="mt-4">

                    <span
                      className={`
                        text-[10px]
                        uppercase
                        font-bold
                        ${
                          item.availability
                            ? 'text-green-700'
                            : 'text-red-600'
                        }
                      `}
                    >
                      {item.availability
                        ? '● In Stock'
                        : '● Out of Stock'}
                    </span>

                  </div>


                  {/* View Details */}
                  <Link
                    to={`/menu/${item._id}`}
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      uppercase
                      font-bold
                      border-b-2
                      border-black
                      pb-1
                      transition-all
                      duration-300
                      group-hover:gap-4
                    "
                  >
                    View Details
                    <span className="text-base">
                      ↗
                    </span>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        )}

      </div>

    </section>
  )
}

export default MenuSection