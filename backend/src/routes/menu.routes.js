const express = require('express')

const {
  getMenuItems,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
} = require('../controllers/menu.controller')

const protect = require('../middleware/auth.middleware')
const adminOnly = require('../middleware/admin.middleware')
const upload = require('../middleware/upload.middleware')

const router = express.Router()

// Public route
router.get('/', getMenuItems)
router.get('/:id', getMenuItemById)

// Admin-only routes
router.post(
  '/',
  protect,
  adminOnly,
  upload.single('image'),
  createMenuItem
)

router.put(
  '/:id',
  protect,
  adminOnly,
  upload.single('image'),
  updateMenuItem
)

router.delete('/:id', protect, adminOnly, deleteMenuItem)

module.exports = router