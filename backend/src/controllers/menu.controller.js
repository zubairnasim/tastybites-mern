const MenuItem = require('../models/MenuItem')
const cloudinary = require('../config/cloudinary')

const getMenuItemById = async (req, res) => {
  try {
    const { id } = req.params

    const menuItem = await MenuItem.findById(id)

    if (!menuItem) {
      return res.status(404).json({
        message: 'Menu item not found'
      })
    }

    res.status(200).json({
      menuItem
    })
  } catch (error) {
    console.error('Get menu item error:', error.message)

    res.status(500).json({
      message: 'Server error'
    })
  }
}

const getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find()
      .sort({ createdAt: -1 })

    res.status(200).json({
      menuItems
    })
  } catch (error) {
    console.error('Get menu items error:', error.message)

    res.status(500).json({
      message: 'Server error'
    })
  }
}

const createMenuItem = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      price,
      availability
    } = req.body

    // Check required fields
    if (!name || !description || !category || price === undefined) {
      return res.status(400).json({
        message: 'Please provide all required fields'
      })
    }

    let imageUrl = ''

    // Upload image if provided
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer)
      imageUrl = result.secure_url
    }

    const menuItem = await MenuItem.create({
      name,
      description,
      category,
      price,
      availability,
      image: imageUrl
    })

    res.status(201).json({
      message: 'Menu item created successfully',
      menuItem
    })
  } catch (error) {
    console.error('Create menu item error:', error.message)

    res.status(500).json({
      message: 'Server error'
    })
  }
}

const updateMenuItem = async (req, res) => {
  try {
    const { id } = req.params

    const {
      name,
      description,
      category,
      price,
      availability
    } = req.body

    const menuItem = await MenuItem.findById(id)

    if (!menuItem) {
      return res.status(404).json({
        message: 'Menu item not found'
      })
    }

    // Update text fields if provided
    if (name !== undefined) menuItem.name = name
    if (description !== undefined) menuItem.description = description
    if (category !== undefined) menuItem.category = category
    if (price !== undefined) menuItem.price = price
    if (availability !== undefined) menuItem.availability = availability

    // Upload new image if provided
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer)
      menuItem.image = result.secure_url
    }

    await menuItem.save()

    res.status(200).json({
      message: 'Menu item updated successfully',
      menuItem
    })
  } catch (error) {
    console.error('Update menu item error:', error.message)

    res.status(500).json({
      message: 'Server error'
    })
  }
}

const deleteMenuItem = async (req, res) => {
  try {
    const { id } = req.params

    const menuItem = await MenuItem.findById(id)

    if (!menuItem) {
      return res.status(404).json({
        message: 'Menu item not found'
      })
    }

    await MenuItem.findByIdAndDelete(id)

    res.status(200).json({
      message: 'Menu item deleted successfully'
    })
  } catch (error) {
    console.error('Delete menu item error:', error.message)

    res.status(500).json({
      message: 'Server error'
    })
  }
}

const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'tastybites/menu-items'
      },
      (error, result) => {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      }
    )

    uploadStream.end(fileBuffer)
  })
}

module.exports = {
  getMenuItems,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
}