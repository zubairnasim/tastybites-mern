const multer = require('multer')
const path = require('path')

const storage = multer.memoryStorage()

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp'
    ]

    const allowedExtensions = [
      '.jpg',
      '.jpeg',
      '.png',
      '.webp'
    ]

    const fileExtension = path.extname(file.originalname).toLowerCase()

    if (
      allowedMimeTypes.includes(file.mimetype) ||
      (
        file.mimetype === 'application/octet-stream' &&
        allowedExtensions.includes(fileExtension)
      )
    ) {
      cb(null, true)
    } else {
      cb(new Error(`Invalid file type: ${file.mimetype}`))
    }
  }
})

module.exports = upload