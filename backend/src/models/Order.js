const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    items: [
      {
        menuItem: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'MenuItem',
          required: true
        },

        quantity: {
          type: Number,
          required: true,
          min: 1
        }
      }
    ],

    totalAmount: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true
  }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order