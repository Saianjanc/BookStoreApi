"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var bookSchema = new _mongoose.Schema({
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
}, {
  timestamps: true
});
var _default = exports["default"] = (0, _mongoose.model)('Book', bookSchema);