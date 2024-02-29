import {book,cart} from '../models/book.model';

//get all books
export const getAllBooks = async () => {
  const data = await book.find();
  return data;
};

//add book to cart
export const addToCart = async (book) => {
  const chk = await cart.findById(book._id)
  if(chk==null){
  const data = await cart.create(book);
  return data;
  }else{
    const data = await cart.updateOne({_id:book._id},{$push:{cartItems:book.cartItems}});
    return data;
  }
};

export const getCartItems = async (id) => {
  const data = await cart.findById(id);
  if(data)
  return data;
  else
  return {cartItems:[]};
};

export const removeCartItem = async (userId,id) => {
  const chk = await cart.findById(userId)
  if(chk){
    // const data = await cart.updateOne({_id:id},{$pull:{cartItems:book.cartItems}});
    const newCart = await chk.cartItems.filter((book)=>book._id!=id)
    const data = await cart.updateOne({_id:userId},{cartItems:newCart})
    return data;
    }
};

export const updateCartItem = async (id,body) => {
  const data = await cart.findByIdAndUpdate(id,body);
  return data;
};