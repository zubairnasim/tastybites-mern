import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'
import { useAuth } from '../context/AuthContext'

function AdminLogin() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      setError('')

      const response = await api.post('/auth/admin-login', formData)

      const { user, token } = response.data

      login(user, token)

      navigate('/admin/dashboard')
    } catch (error) {
      setError(
        error.response?.data?.message ||
        'Admin login failed.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-yellow-300 flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md">

        <Link
          to="/"
          className="block text-3xl font-black tracking-tight mb-12"
        >
          Tasty<span className="text-white">Bites</span>
        </Link>

        <div className="border-2 border-yellow-300 p-8 sm:p-10">

          <p className="text-xs uppercase tracking-[0.2em] font-bold">
            TastyBites Administration
          </p>

          <h1 className="text-5xl font-black uppercase tracking-[-0.06em] mt-4">
            Admin Login
          </h1>

          <p className="text-sm text-white/50 mt-4">
            Sign in to manage menu items and users.
          </p>

          {error && (
            <div className="mt-8 border-2 border-red-500 bg-red-500 text-white px-4 py-3 text-sm font-bold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">

            <div>
              <label className="block text-xs uppercase font-bold mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-yellow-300 bg-transparent text-white px-4 py-3 outline-none focus:bg-white focus:text-black transition"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border-2 border-yellow-300 bg-transparent text-white px-4 py-3 outline-none focus:bg-white focus:text-black transition"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-300 text-black py-4 text-sm uppercase font-black hover:bg-white transition disabled:opacity-50"
            >
              {loading ? 'Signing In...' : 'Admin Sign In ↗'}
            </button>

          </form>

          <Link
            to="/"
            className="inline-block mt-8 text-xs uppercase font-bold hover:text-white transition"
          >
            ← Back to Website
          </Link>

        </div>

      </div>

    </main>
  )
}

export default AdminLogin