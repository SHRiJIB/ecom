import { Router } from 'express';
import {
	createProduct,
	deleteProduct,
	getProductById,
	getProducts,
	updateProduct,
} from '../controllers/product';
import { admin, protect } from '../middlewares/auth';

const router = Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router
	.route('/:id')
	.get(getProductById)
	.delete(protect, admin, deleteProduct)
	.put(protect, admin, updateProduct);

export default router;
