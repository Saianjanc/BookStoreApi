import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
  {
    bookName: {
      type: String
    },
    bookImage: {
      type: String
    },
    author: {
      type: String
    },
    quantity: {
      type: String
    },
    price: {
      type: String
    },
    discountPrice: {
      type: String
    },
    description: {
      type: String
    },
    _id: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const cartSchema = new Schema(
  {
    _id: {
      type: String
    },
    cartItems: [{
      bookName: {
        type: String
      },
      bookImage: {
        type: String
      },
      author: {
        type: String
      },
      quantity: {
        type: String
      },
      price: {
        type: String
      },
      discountPrice: {
        type: String
      },
      description: {
        type: String
      },
      _id: {
        type: String
      },
      quantityToBuy: {
        type: Number
      }
    }]
  },
  {
    timestamps: true
  }
);

export const book = model('Book', bookSchema);
export const cart = model('Cart', cartSchema);