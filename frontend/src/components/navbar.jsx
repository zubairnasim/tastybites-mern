import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5">

        {/* Desktop / Main Row */}
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center">

          {/* Left */}
          <div className="hidden lg:flex items-center gap-10">

            <Link
              to="/"
              className="text-sm font-bold uppercase hover:opacity-60 transition"
            >
              Home
            </Link>

            <a
              href="#about"
              className="text-sm font-bold uppercase hover:opacity-60 transition"
            >
              About
            </a>

            <a
              href="#deals"
              className="text-sm font-bold uppercase hover:opacity-60 transition"
            >
              Deals
            </a>

          </div>


          {/* Logo */}
          <div className="flex justify-start lg:justify-center">

            <Link
              to="/"
              className="text-2xl lg:text-3xl font-black tracking-tighter"
            >
              Tasty<span className="text-white">Bites</span>
            </Link>

          </div>


          {/* Desktop Right */}
          <div className="hidden lg:flex items-center justify-end gap-8">

            <a
              href="#menu"
              className="text-sm font-bold uppercase hover:opacity-60 transition"
            >
              Menus
            </a>

            <a
              href="#testimonial"
              className="text-sm font-bold uppercase hover:opacity-60 transition"
            >
              Testimonial
            </a>

            {user ? (
              <>
                {user.role === 'Admin' && (
                  <Link
                    to="/admin/dashboard"
                    className="text-sm font-bold uppercase hover:opacity-60 transition"
                  >
                    Dashboard
                  </Link>
                )}

                <button
                  onClick={logout}
                  className="text-sm font-bold uppercase hover:opacity-60 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-bold uppercase hover:opacity-60 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-black text-yellow-300 px-4 py-2 rounded-full text-sm font-bold uppercase hover:bg-white hover:text-black transition"
                >
                  Register
                </Link>
              </>
            )}

          </div>


          {/* Mobile Button */}
          <div className="flex justify-end lg:hidden">

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 bg-black text-yellow-300 rounded-full flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <i
                className={
                  menuOpen
                    ? 'ri-close-line text-xl'
                    : 'ri-menu-line text-xl'
                }
              />
            </button>

          </div>

        </div>


        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-5 bg-black text-white p-6 rounded-2xl">

            <div className="flex flex-col gap-5">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase font-bold"
              >
                Home
              </Link>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase font-bold"
              >
                About
              </a>

              <a
                href="#menu"
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase font-bold"
              >
                Menu
              </a>

              <a
                href="#testimonial"
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase font-bold"
              >
                Testimonial
              </a>

              {user ? (
                <>
                  {user.role === 'Admin' && (
                    <Link
                      to="/admin/dashboard"
                      onClick={() => setMenuOpen(false)}
                      className="text-sm uppercase font-bold text-yellow-300"
                    >
                      Admin Dashboard
                    </Link>
                  )}

                  <button
                    onClick={() => {
                      logout()
                      setMenuOpen(false)
                    }}
                    className="text-left text-sm uppercase font-bold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="text-sm uppercase font-bold"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="text-sm uppercase font-bold text-yellow-300"
                  >
                    Register
                  </Link>
                </>
              )}

            </div>

          </div>
        )}

      </div>

    </nav>
  )
}

export default Navbar