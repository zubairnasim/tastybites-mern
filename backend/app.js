const express = require('express')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./src/routes/auth.routes')
const menuRoutes = require('./src/routes/menu.routes')
const userRoutes = require('./src/routes/user.routes')
const dashboardRoutes = require('./src/routes/dashboard.routes')
const orderRoutes = require('./src/routes/order.routes')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/menu-items', menuRoutes)
app.use('/api/users', userRoutes)
app.use('/api/dashboard', dashboardRoutes)
app.use('/api/orders', orderRoutes)

// Test route
app.get('/', (req, res) => {
  res.json({
    message: 'TastyBites API is running'
  })
})

module.exports = app