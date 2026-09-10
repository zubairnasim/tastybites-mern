const express = require('express')

const {
  registerUser,
  loginUser,
  adminLogin
} = require('../controllers/auth.controller')

const router = express.Router()

router.post('/register', registerUser)

router.post('/login', loginUser)

router.post('/admin-login', adminLogin)

module.exports = router