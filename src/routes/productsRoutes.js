import { Router } from 'express';
import {
  createProduct,
  getProductById,
  getProducts,
} from '../controllers/productsController.js';

const router = Router();

router.get('/products', getProducts);
router.get('/products/:productId', getProductById);
router.post('/products', createProduct);

export default router;
