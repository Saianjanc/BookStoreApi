import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {type: String, required: true},
    mobile: {type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address:[{addressType:{type: String},address: {type: String},city:{type: String},state:{type: String}}]
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);