import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
  {
    bookName: {
        type: String
    },
    bookImage:{
        type: String
      },
    author:{
        type: String
          },
    quantity:{
        type: String
          },
    price:{
        type: String
          },
    discountPrice:{
        type: String
          },
    description:{
        type: String
          },
    _id:{
        type: String
        }
  },
  {
    timestamps: true
  }
);

export default model('Book', bookSchema);
