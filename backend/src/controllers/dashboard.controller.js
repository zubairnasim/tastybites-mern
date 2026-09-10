const User = require('../models/User')
const MenuItem = require('../models/MenuItem')

const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments()
    const totalMenuItems = await MenuItem.countDocuments()

    res.status(200).json({
      totalUsers,
      totalMenuItems,
      totalOrders: 0
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