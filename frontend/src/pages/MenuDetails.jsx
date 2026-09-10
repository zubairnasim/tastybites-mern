import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../services/api'

function MenuDetails() {
  const { id } = useParams()

  const [menuItem, setMenuItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchMenuItem = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await api.get(`/menu-items/${id}`)

        setMenuItem(response.data.menuItem)
      } catch (error) {
        console.error('Failed to fetch menu item:', error)

        if (error.response?.status === 404) {
          setError('Menu item not found.')
        } else {
          setError('Unable to load menu item.')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchMenuItem()
  }, [id])

  /* Loading */
  if (loading) {
    return (
      <main className="min-h-screen bg-yellow-300 flex items-center justify-center">

        <div className="text-center">

          <div className="inline-block w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin" />

          <p className="mt-4 text-sm uppercase font-bold">
            Loading...
          </p>

        </div>

      </main>
    )
  }

  /* Error */
  if (error) {
    return (
      <main className="min-h-screen bg-yellow-300 flex items-center justify-center px-6">

        <div className="text-center">

          <h1 className="text-4xl sm:text-5xl font-black uppercase">
            {error}
          </h1>

          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              mt-8
              bg-black
              text-yellow-300
              px-6
              py-3
              rounded-full
              text-sm
              uppercase
              font-bold
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
            "
          >
            ← Back to Menu
          </Link>

        </div>

      </main>
    )
  }

  return (
    <main className="min-h-screen bg-yellow-300 text-black">

      {/* =========================
          TOP NAVIGATION
      ========================== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-8">

        <Link
          to="/"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            uppercase
            font-bold
            hover:opacity-60
            transition-opacity
          "
        >
          ← Back to Menu
        </Link>

      </div>


      {/* =========================
          DETAILS
      ========================== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative">

            {menuItem.image ? (
              <img
                src={menuItem.image}
                alt={menuItem.name}
                className="
                  w-full
                  aspect-square
                  object-cover
                  rounded-[35%]
                  border-4
                  border-black
                  transition-transform
                  duration-500
                  hover:rotate-2
                  hover:scale-[1.02]
                "
              />
            ) : (
              <div
                className="
                  w-full
                  aspect-square
                  rounded-[35%]
                  border-4
                  border-black
                  bg-black/10
                  flex
                  items-center
                  justify-center
                "
              >
                <span className="uppercase font-bold">
                  No Image
                </span>
              </div>
            )}

          </div>


          {/* Information */}
          <div>

            {/* Category */}
            <span
              className="
                inline-block
                bg-black
                text-yellow-300
                px-4
                py-2
                rounded-full
                text-xs
                uppercase
                font-bold
                tracking-wide
              "
            >
              {menuItem.category}
            </span>


            {/* Name */}
            <h1
              className="
                mt-6
                text-6xl
                sm:text-7xl
                lg:text-[7rem]
                uppercase
                font-black
                tracking-[-0.08em]
                leading-[0.72]
              "
            >
              {menuItem.name}
            </h1>


            {/* Price + Availability */}
            <div className="flex items-center gap-6 mt-8">

              <span className="text-3xl font-black">
                ₹{menuItem.price}
              </span>

              <span
                className={`
                  text-xs
                  uppercase
                  font-bold
                  ${
                    menuItem.availability
                      ? 'text-green-700'
                      : 'text-red-600'
                  }
                `}
              >
                {menuItem.availability
                  ? '● In Stock'
                  : '● Out of Stock'}
              </span>

            </div>


            {/* Description */}
            <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed">
              {menuItem.description}
            </p>


            {/* CTA */}
            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-3
                mt-10
                bg-black
                text-yellow-300
                px-7
                py-3.5
                rounded-full
                text-sm
                uppercase
                font-bold
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
            >
              Explore More
              <span className="text-lg">
                ↗
              </span>
            </Link>

          </div>

        </div>

      </div>

    </main>
  )
}

export default MenuDetails