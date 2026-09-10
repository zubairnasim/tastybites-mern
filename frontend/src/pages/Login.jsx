import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'
import { useAuth } from '../context/AuthContext'

function Login() {
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

      const response = await api.post('/auth/login', formData)

      const { user, token } = response.data

      login(user, token)

      navigate('/')
    } catch (error) {
      setError(
        error.response?.data?.message || 'Login failed. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-yellow-300 text-black flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-5xl grid lg:grid-cols-2 border-4 border-black bg-yellow-300">

        {/* Left */}
        <div className="bg-black text-yellow-300 p-10 lg:p-14 flex flex-col justify-between min-h-[500px]">

          <Link
            to="/"
            className="text-2xl font-black tracking-tight"
          >
            Tasty<span className="text-white">Bites</span>
          </Link>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] mb-5">
              Welcome Back
            </p>

            <h1 className="text-6xl sm:text-7xl font-black uppercase leading-[0.8] tracking-[-0.07em]">
              Good Food.
              <br />
              Good Mood.
            </h1>

            <p className="mt-8 text-sm text-white/60 max-w-sm leading-relaxed">
              Sign in to explore your TastyBites experience.
            </p>
          </div>

        </div>

        {/* Right */}
        <div className="bg-yellow-300 p-10 lg:p-14 flex flex-col justify-center">

          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] font-bold">
              Account Login
            </p>

            <h2 className="text-4xl font-black uppercase mt-3">
              Sign In
            </h2>
          </div>

          {error && (
            <div className="border-2 border-black bg-red-500 text-white px-4 py-3 mb-6 text-sm font-bold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

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
                placeholder="you@example.com"
                className="w-full border-2 border-black bg-transparent px-4 py-3 outline-none focus:bg-white transition"
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
                placeholder="••••••••"
                className="w-full border-2 border-black bg-transparent px-4 py-3 outline-none focus:bg-white transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-yellow-300 px-6 py-4 text-sm uppercase font-bold hover:bg-white hover:text-black transition disabled:opacity-50"
            >
              {loading ? 'Signing In...' : 'Sign In ↗'}
            </button>

          </form>

          <p className="text-sm mt-8">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="font-bold underline"
            >
              Register
            </Link>
          </p>

        </div>

      </div>

    </main>
  )
}

export default Login