import Book from '../models/book.model';

//get all books
export const getAllBooks = async () => {
  const data = await Book.find();
  return data;
};