const express = require('express')

const {
  createOrder,
  getOrders
} = require('../controllers/order.controller')

const protect = require('../middleware/auth.middleware')
const adminOnly = require('../middleware/admin.middleware')

const router = express.Router()

// User: place an order
router.post('/', protect, createOrder)

// Admin: view all orders
router.get('/', protect, adminOnly, getOrders)

module.exports = router