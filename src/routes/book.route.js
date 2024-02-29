import express from 'express';
import * as bookController from '../controllers/book.controller';
import loggedIn from '../middlewares/auth.middleware';
const router = express.Router();

router.get('', bookController.getBooks);
router.get('/getCart/:userId', bookController.getCart);
router.post('/addToCart', bookController.addCart);
router.delete('/:_id', bookController.removeCart);
router.put('/:_id', bookController.updateCart);

export default router;