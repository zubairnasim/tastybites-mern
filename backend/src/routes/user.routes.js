const express = require('express')

const {
  getUsers,
  deleteUser
} = require('../controllers/user.controller')

const protect = require('../middleware/auth.middleware')
const adminOnly = require('../middleware/admin.middleware')

const router = express.Router()

// Admin-only routes
router.get('/', protect, adminOnly, getUsers)
router.delete('/:id', protect, adminOnly, deleteUser)

module.exports = router