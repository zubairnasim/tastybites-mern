import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchUsers = async () => {
    try {
      setLoading(true)
      setError('')

      const token = localStorage.getItem('tastybites_token')

      const response = await api.get('/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setUsers(response.data.users)
    } catch (error) {
      console.error('Failed to fetch users:', error)
      setError(
        error.response?.data?.message ||
        'Unable to load users.'
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this user?'
    )

    if (!confirmed) return

    try {
      const token = localStorage.getItem('tastybites_token')

      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setUsers((currentUsers) =>
        currentUsers.filter((user) => user._id !== id)
      )
    } catch (error) {
      console.error('Delete user failed:', error)

      alert(
        error.response?.data?.message ||
        'Failed to delete user.'
      )
    }
  }

  return (
    <div className="min-h-screen bg-yellow-300 text-black">

      {/* Header */}



      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

        {/* Title */}
        <div className="mb-12">

          <p className="text-xs uppercase tracking-[0.2em] font-bold">
            Administration
          </p>

          <h1 className="text-6xl sm:text-7xl font-black uppercase tracking-[-0.07em] leading-[0.8] mt-4">
            Users
          </h1>

          <p className="text-sm opacity-60 mt-6">
            Manage registered TastyBites users.
          </p>

        </div>


        {/* Loading */}
        {loading && (
          <div className="py-20 text-center">

            <div className="inline-block w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin" />

            <p className="mt-4 text-sm uppercase font-bold">
              Loading users...
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


        {/* Users */}
        {!loading && !error && (
          <div className="border-2 border-black overflow-x-auto">

            <table className="w-full min-w-[700px]">

              <thead className="bg-black text-yellow-300">

                <tr>
                  <th className="text-left px-5 py-4 text-xs uppercase tracking-wider">
                    Name
                  </th>

                  <th className="text-left px-5 py-4 text-xs uppercase tracking-wider">
                    Email
                  </th>

                  <th className="text-left px-5 py-4 text-xs uppercase tracking-wider">
                    Role
                  </th>

                  <th className="text-left px-5 py-4 text-xs uppercase tracking-wider">
                    Registered
                  </th>

                  <th className="text-right px-5 py-4 text-xs uppercase tracking-wider">
                    Action
                  </th>
                </tr>

              </thead>

              <tbody>

                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-t-2 border-black"
                  >

                    <td className="px-5 py-5 font-bold">
                      {user.name}
                    </td>

                    <td className="px-5 py-5 text-sm">
                      {user.email}
                    </td>

                    <td className="px-5 py-5">

                      <span className="inline-block bg-black text-yellow-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold">
                        {user.role}
                      </span>

                    </td>

                    <td className="px-5 py-5 text-sm">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-5 py-5 text-right">

                      <button
                        onClick={() => handleDelete(user._id)}
                        className="bg-black text-yellow-300 px-4 py-2 text-xs uppercase font-bold hover:bg-red-600 hover:text-white transition"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>


            {users.length === 0 && (
              <div className="py-16 text-center">

                <p className="text-xl font-black uppercase">
                  No Users Found
                </p>

              </div>
            )}

          </div>
        )}

      </div>

    </div>
  )
}

export default Users