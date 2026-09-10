import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { useAuth } from '../../context/AuthContext'


function Dashboard() {
  const { user } = useAuth()

  const [stats, setStats] = useState({
    totalMenuItems: 0,
    totalUsers: 0,
    totalOrders: 0
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('tastybites_token')

        const response = await api.get('/dashboard/stats', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setStats(response.data)
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <main className="min-h-screen bg-yellow-300 text-black flex flex-col lg:flex-row">


      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">

          <div className="flex items-center justify-between">

            <Link
              to="/"
              className="text-2xl font-black tracking-tight"
            >
              Tasty<span className="text-white">Bites</span>
            </Link>

            <div className="text-right">
              <p className="text-xs uppercase tracking-wider opacity-60">
                Logged in as
              </p>

              <p className="font-bold">
                {user?.name}
              </p>
            </div>

          </div>

        </div>
      </header>


      {/* Dashboard */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

        <div className="mb-12">

          <p className="text-xs uppercase tracking-[0.2em] font-bold">
            Administration
          </p>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.07em] leading-[0.8] mt-4">
            Dashboard
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-relaxed opacity-70">
            Manage your restaurant, menu items and registered users
            from one place.
          </p>

        </div>


        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Menu */}
          <div className="border-2 border-black p-7 bg-yellow-300">

            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.15em] font-bold">
                Menu Items
              </p>

              <i className="ri-restaurant-fill text-2xl" />
            </div>

            <p className="text-6xl font-black mt-10">
              {loading ? '—' : stats.totalMenuItems}
            </p>

            <Link
              to="/admin/menu-items"
              className="inline-block mt-6 text-xs uppercase font-bold border-b-2 border-black pb-1"
            >
              Manage Menu ↗
            </Link>

          </div>


          {/* Users */}
          <div className="border-2 border-black p-7 bg-yellow-300">

            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.15em] font-bold">
                Users
              </p>

              <i className="ri-group-fill text-2xl" />
            </div>

            <p className="text-6xl font-black mt-10">
              {loading ? '—' : stats.totalUsers}
            </p>

            <Link
              to="/admin/users"
              className="inline-block mt-6 text-xs uppercase font-bold border-b-2 border-black pb-1"
            >
              Manage Users ↗
            </Link>

          </div>


          {/* Orders */}
          <div className="border-2 border-black p-7 bg-black text-yellow-300">

            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.15em] font-bold">
                Orders
              </p>

              <i className="ri-shopping-bag-3-fill text-2xl" />
            </div>

            <p className="text-6xl font-black mt-10">
              {loading ? '—' : stats.totalOrders}
            </p>

            <p className="text-xs uppercase mt-6 text-white/50">
              Order management coming next
            </p>

          </div>

        </div>


        {/* Quick Actions */}
        <div className="mt-12">

          <p className="text-xs uppercase tracking-[0.2em] font-bold mb-5">
            Quick Actions
          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/admin/menu-items"
              className="bg-black text-yellow-300 px-6 py-4 text-sm uppercase font-bold hover:bg-white hover:text-black transition"
            >
              View Menu
            </Link>

            <Link
              to="/admin/add-menu-item"
              className="border-2 border-black px-6 py-4 text-sm uppercase font-bold hover:bg-white transition"
            >
              Add Menu Item ↗
            </Link>

            <Link
              to="/admin/users"
              className="border-2 border-black px-6 py-4 text-sm uppercase font-bold hover:bg-white transition"
            >
              View Users
            </Link>

          </div>

        </div>

      </div>

    </main>
  )
}

export default Dashboard