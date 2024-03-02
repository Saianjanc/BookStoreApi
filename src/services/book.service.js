import {book,cart,wishlist} from '../models/book.model';

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
    const newCart = await chk.cartItems.filter((book)=>book._id!=id)
    const data = await cart.updateOne({_id:userId},{cartItems:newCart})
    return data;
    }
};

export const updateCartItem = async (id,body) => {
  const data = await cart.findByIdAndUpdate(id,body);
  return data;
};

//add book to wishlist
export const addToWishlist = async (book) => {
  const chk = await wishlist.findById(book._id)
  if(chk==null){
  const data = await wishlist.create(book);
  return data;
  }else{
    const data = await wishlist.updateOne({_id:book._id},{$push:{wishList:book.wishList}});
    return data;
  }
};

export const getWishlistItems = async (id) => {
  const data = await wishlist.findById(id);
  if(data)
  return data;
  else
  return {wishList:[]};
};

export const removeWishItem = async (userId,id) => {
  const chk = await wishlist.findById(userId)
  if(chk){
    const newWishList = await chk.wishList.filter((book)=>book._id!=id)
    const data = await wishlist.updateOne({_id:userId},{wishList:newWishList})
    return data;
    }
};

export const addNewFeedback = async (_id,body) => {
  const chk = await book.findById(_id)
  if(chk){
    await chk.feedback.push(body)
    const data = await book.updateOne({_id:_id},{feedback:chk.feedback})
    return data;
  }
};