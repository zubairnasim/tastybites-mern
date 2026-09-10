import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function AdminSidebar() {
  const { user, logout } = useAuth()

  const navItems = [
    {
      name: 'Dashboard',
      path: '/admin/dashboard',
      icon: 'ri-dashboard-line'
    },
    {
      name: 'Menu Items',
      path: '/admin/menu-items',
      icon: 'ri-restaurant-line'
    },
    {
      name: 'Add Menu Item',
      path: '/admin/add-menu-item',
      icon: 'ri-add-circle-line'
    },
    {
      name: 'Users',
      path: '/admin/users',
      icon: 'ri-group-line'
    }
  ]

  return (
    <aside className="w-full lg:w-64 bg-black text-white lg:min-h-screen shrink-0">

      <div className="p-6 lg:p-7 lg:sticky lg:top-0">

        {/* Logo */}
        <Link
          to="/admin/dashboard"
          className="text-2xl font-black tracking-tight text-yellow-300"
        >
          Tasty<span className="text-white">Bites</span>
        </Link>

        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-2">
          Admin Panel
        </p>


        {/* Navigation */}
        <nav className="mt-10 flex lg:flex-col gap-2 overflow-x-auto">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 text-xs uppercase font-bold whitespace-nowrap transition ${
                  isActive
                    ? 'bg-yellow-300 text-black'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <i className={`${item.icon} text-lg`} />
              {item.name}
            </NavLink>
          ))}

        </nav>


        {/* Bottom */}
        <div className="mt-10 lg:mt-16 pt-6 border-t border-white/20">

          <p className="text-[10px] uppercase tracking-wider text-white/40">
            Signed in as
          </p>

          <p className="text-sm font-bold mt-1 truncate">
            {user?.name}
          </p>

          <button
            onClick={logout}
            className="mt-5 flex items-center gap-2 text-xs uppercase font-bold text-white/60 hover:text-yellow-300 transition"
          >
            <i className="ri-logout-box-r-line text-lg" />
            Logout
          </button>

        </div>

      </div>

    </aside>
  )
}

export default AdminSidebar