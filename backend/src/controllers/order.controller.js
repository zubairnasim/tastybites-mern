const Order = require('../models/Order')
const MenuItem = require('../models/MenuItem')

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { items } = req.body

    if (!items || items.length === 0) {
      return res.status(400).json({
        message: 'Order must contain at least one item'
      })
    }

    let totalAmount = 0
    const orderItems = []

    for (const item of items) {
      const menuItem = await MenuItem.findById(item.menuItem)

      if (!menuItem) {
        return res.status(404).json({
          message: 'Menu item not found'
        })
      }

      if (!menuItem.availability) {
        return res.status(400).json({
          message: `${menuItem.name} is currently unavailable`
        })
      }

      const quantity = Number(item.quantity)

      if (!quantity || quantity < 1) {
        return res.status(400).json({
          message: 'Invalid quantity'
        })
      }

      totalAmount += menuItem.price * quantity

      orderItems.push({
        menuItem: menuItem._id,
        quantity
      })
    }

    const order = await Order.create({
      user: req.user.userId,
      items: orderItems,
      totalAmount
    })

    res.status(201).json({
      message: 'Order placed successfully',
      order
    })
  } catch (error) {
    console.error('Create order error:', error.message)
    res.status(500).json({
      message: 'Server error'
    })
  }
}

// Get all orders - Admin
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')
      .populate('items.menuItem', 'name price')
      .sort({ createdAt: -1 })

    res.json(orders)
  } catch (error) {
    console.error('Get orders error:', error.message)
    res.status(500).json({
      message: 'Server error'
    })
  }
}

module.exports = {
  createOrder,
  getOrders
}