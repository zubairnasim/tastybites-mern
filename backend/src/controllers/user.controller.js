const User = require('../models/user')

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select('-password')
      .sort({ createdAt: -1 })

    res.status(200).json({
      users
    })
  } catch (error) {
    console.error('Get users error:', error.message)

    res.status(500).json({
      message: 'Server error'
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params

    const user = await User.findById(id)

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    await User.findByIdAndDelete(id)

    res.status(200).json({
      message: 'User deleted successfully'
    })
  } catch (error) {
    console.error('Delete user error:', error.message)

    res.status(500).json({
      message: 'Server error'
    })
  }
}

module.exports = {
  getUsers,
  deleteUser
}