const User = require('../models/user')
const MenuItem = require('../models/MenuItem')
const Order = require('../models/Order')

const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments()
    const totalMenuItems = await MenuItem.countDocuments()
    const totalOrders = await Order.countDocuments()

    res.json({
      totalUsers,
      totalMenuItems,
      totalOrders
    })
  } catch (error) {
    console.error('Dashboard stats error:', error.message)
    res.status(500).json({
      message: 'Server error'
    })
  }
}

module.exports = {
  getDashboardStats
}