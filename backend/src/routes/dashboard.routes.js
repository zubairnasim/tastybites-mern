const express = require('express')

const {
  getDashboardStats
} = require('../controllers/dashboard.controller')

const protect = require('../middleware/auth.middleware')
const adminOnly = require('../middleware/admin.middleware')

const router = express.Router()

router.get(
  '/stats',
  protect,
  adminOnly,
  getDashboardStats
)

module.exports = router