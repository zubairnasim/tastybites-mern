import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  // Restore login after page refresh
  useEffect(() => {
    const storedUser = localStorage.getItem('tastybites_user')
    const storedToken = localStorage.getItem('tastybites_token')

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser))
      setToken(storedToken)
    }

    setLoading(false)
  }, [])

  // Save user + token
  const login = (userData, authToken) => {
    localStorage.setItem('tastybites_user', JSON.stringify(userData))
    localStorage.setItem('tastybites_token', authToken)

    setUser(userData)
    setToken(authToken)
  }

  // Remove user + token
  const logout = () => {
    localStorage.removeItem('tastybites_user')
    localStorage.removeItem('tastybites_token')

    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        loading,
        isAuthenticated: !!user && !!token
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}