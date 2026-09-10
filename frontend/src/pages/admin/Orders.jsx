import { useEffect, useState } from 'react'
import api from '../../services/api'
import { useAuth } from '../../context/AuthContext'

function Orders() {
  const { token } = useAuth()

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get('/orders', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setOrders(response.data)
      } catch (error) {
        console.error('Failed to fetch orders:', error)
        setError(
          error.response?.data?.message ||
          'Unable to load orders.'
        )
      } finally {
        setLoading(false)
      }
    }

    if (token) {
      fetchOrders()
    }
  }, [token])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="inline-block w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin" />
          <p className="mt-4 text-sm uppercase font-bold">
            Loading Orders...
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-black uppercase">
          {error}
        </h2>
      </div>
    )
  }

  return (
    <div>

      {/* Header */}
      <div className="mb-8">
        <p className="text-sm uppercase font-bold opacity-60">
          Admin Panel
        </p>

        <h1 className="text-5xl font-black uppercase tracking-tight">
          Orders
        </h1>
      </div>

      {/* Empty State */}
      {orders.length === 0 ? (
        <div className="bg-white border-2 border-black rounded-2xl p-10 text-center">
          <i className="ri-shopping-bag-3-line text-5xl" />

          <h2 className="mt-4 text-2xl font-black uppercase">
            No Orders Yet
          </h2>

          <p className="mt-2 text-sm opacity-60">
            Orders placed by users will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-5">

          {orders.map((order, index) => (
            <div
              key={order._id}
              className="bg-white border-2 border-black rounded-2xl p-6"
            >

              {/* Order Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b-2 border-black pb-4">

                <div>
                  <p className="text-xs uppercase font-bold opacity-50">
                    Order #{orders.length - index}
                  </p>

                  <h2 className="text-xl font-black uppercase">
                    {order.user?.name || 'Unknown User'}
                  </h2>

                  <p className="text-sm opacity-60">
                    {order.user?.email}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-xs uppercase font-bold opacity-50">
                    Order Date
                  </p>

                  <p className="text-sm font-bold">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

              </div>


              {/* Items */}
              <div className="py-5">

                <p className="text-xs uppercase font-bold opacity-50 mb-3">
                  Items
                </p>

                <div className="space-y-2">

                  {order.items.map((item) => (
                    <div
                      key={item._id}
                      className="flex justify-between items-center"
                    >
                      <span className="font-bold">
                        {item.menuItem?.name || 'Menu Item'}
                      </span>

                      <span className="text-sm">
                        × {item.quantity}
                      </span>
                    </div>
                  ))}

                </div>

              </div>


              {/* Total */}
              <div className="border-t-2 border-black pt-4 flex justify-between items-center">

                <span className="text-sm uppercase font-bold">
                  Total
                </span>

                <span className="text-2xl font-black">
                  ₹{order.totalAmount}
                </span>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  )
}

export default Orders