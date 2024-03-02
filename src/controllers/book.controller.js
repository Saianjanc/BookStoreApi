import HttpStatus from 'http-status-codes';
import * as BookService from '../services/book.service';

export const getBooks = async (req, res, next) => {
  try {
    const data = await BookService.getAllBooks();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All books fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const getCart = async (req, res, next) => {
  try {
    const data = await BookService.getCartItems(req.params.userId);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All cart items fetched'
    });
  } catch (error) {
    next(error);
  }
};

export const addCart = async (req, res, next) => {
  try {
    const data = await BookService.addToCart(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book successfully Added to Cart'
    });
  } catch (error) {
    next(error);
  }
};

export const removeCart = async (req, res, next) => {
  try {
    const data = await BookService.removeCartItem(req.headers.userid,req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book successfully removed from Cart'
    });
  } catch (error) {
    next(error);
  }
};

export const updateCart = async (req, res, next) => {
  try {
    const data = await BookService.updateCartItem(req.params._id,req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book Quantity updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const addWishlist = async (req, res, next) => {
  try {
    const data = await BookService.addToWishlist(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book successfully Added to WishList'
    });
  } catch (error) {
    next(error);
  }
};

export const getWishlist = async (req, res, next) => {
  try {
    const data = await BookService.getWishlistItems(req.headers.userid);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All wishlist items fetched'
    });
  } catch (error) {
    next(error);
  }
};

export const removeWishlist = async (req, res, next) => {
  try {
    const data = await BookService.removeWishItem(req.headers.userid,req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book successfully removed from Wishlist'
    });
  } catch (error) {
    next(error);
  }
};

export const addFeedback = async (req, res, next) => {
  try {
    const data = await BookService.addNewFeedback(req.params._id,req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Feedback Submitted Successfully'
    });
  } catch (error) {
    next(error);
  }
};