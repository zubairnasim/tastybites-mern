import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'
import { useAuth } from '../context/AuthContext'

function Register() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    try {
      setLoading(true)

      const response = await api.post('/auth/register', formData)

      const { user, token } = response.data

      login(user, token)

      navigate('/')
    } catch (error) {
      console.error('Registration failed:', error)

      setError(
        error.response?.data?.message ||
        'Registration failed. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-yellow-300 text-black">

      <div className="min-h-screen grid lg:grid-cols-2">

        {/* =========================
            LEFT — BRANDING
        ========================== */}
        <div className="hidden lg:flex bg-black text-yellow-300 p-12 xl:p-16 flex-col justify-between">

          <Link
            to="/"
            className="text-3xl font-black tracking-[-0.06em]"
          >
            Tasty<span className="text-white">Bites</span>
          </Link>

          <div>

            <p className="text-sm uppercase tracking-[0.2em] mb-6">
              Welcome to
            </p>

            <h1
              className="
                text-[8rem]
                xl:text-[10rem]
                uppercase
                font-black
                tracking-[-0.08em]
                leading-[0.7]
              "
            >
              Tasty
              <br />
              Bites.
            </h1>

            <p className="max-w-sm mt-8 text-sm leading-relaxed text-white/60">
              Create your account and discover delicious food,
              fresh flavours and everything TastyBites has to offer.
            </p>

          </div>

          <p className="text-xs uppercase tracking-[0.15em] text-white/40">
            Fresh food. Good mood.
          </p>

        </div>


        {/* =========================
            RIGHT — REGISTER FORM
        ========================== */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">

          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <Link
              to="/"
              className="lg:hidden block text-2xl font-black tracking-[-0.06em] mb-12"
            >
              Tasty<span className="text-black/50">Bites</span>
            </Link>


            {/* Heading */}
            <div className="mb-10">

              <p className="text-xs uppercase tracking-[0.2em] font-bold mb-4">
                Create Account
              </p>

              <h2
                className="
                  text-6xl
                  sm:text-7xl
                  uppercase
                  font-black
                  tracking-[-0.08em]
                  leading-[0.75]
                "
              >
                Join
                <br />
                Us.
              </h2>

            </div>


            {/* Error */}
            {error && (
              <div className="mb-6 border-2 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}


            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}
              <div>

                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-wider font-bold mb-2"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="
                    w-full
                    bg-transparent
                    border-b-2
                    border-black
                    px-0
                    py-3
                    text-base
                    outline-none
                    placeholder:text-black/40
                    focus:border-black
                  "
                />

              </div>


              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-wider font-bold mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="
                    w-full
                    bg-transparent
                    border-b-2
                    border-black
                    px-0
                    py-3
                    text-base
                    outline-none
                    placeholder:text-black/40
                    focus:border-black
                  "
                />

              </div>


              {/* Password */}
              <div>

                <label
                  htmlFor="password"
                  className="block text-xs uppercase tracking-wider font-bold mb-2"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password"
                  className="
                    w-full
                    bg-transparent
                    border-b-2
                    border-black
                    px-0
                    py-3
                    text-base
                    outline-none
                    placeholder:text-black/40
                    focus:border-black
                  "
                />

              </div>


              {/* Confirm Password */}
              <div>

                <label
                  htmlFor="confirmPassword"
                  className="block text-xs uppercase tracking-wider font-bold mb-2"
                >
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                  className="
                    w-full
                    bg-transparent
                    border-b-2
                    border-black
                    px-0
                    py-3
                    text-base
                    outline-none
                    placeholder:text-black/40
                    focus:border-black
                  "
                />

              </div>


              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  mt-4
                  bg-black
                  text-yellow-300
                  py-4
                  rounded-full
                  text-sm
                  uppercase
                  font-bold
                  tracking-wide
                  hover:bg-white
                  hover:text-black
                  transition-all
                  duration-300
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                {loading ? 'Creating Account...' : 'Create Account ↗'}
              </button>

            </form>


            {/* Login link */}
            <p className="text-sm text-center mt-8">

              Already have an account?{' '}

              <Link
                to="/login"
                className="font-bold underline underline-offset-4 hover:opacity-60"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </main>
  )
}

export default Register