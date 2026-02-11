import createHttpError from 'http-errors';
import { Product } from '../models/product.js';

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

// export const getProducts = async (req, res) => {
//   const products = await Product.find();

//   console.log('--- GLOBAL COLLECTION CHECK ---');
//   console.log('Total products in DB:', products.length);

//   res.status(200).json(products);
// };

export const getProductById = async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findById(productId.trim());

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(200).json(product);
};

// export const getProductById = async (req, res) => {
//   const { productId } = req.params;
//   const cleanId = productId.trim();

//   // Спробуємо знайти продукт як рядок, без автоматичного перетворення в ObjectId
//   const product = await Product.findOne({ _id: cleanId });

//   console.log('--- FINAL TEST ---');
//   console.log('Searching for ID:', cleanId);
//   console.log('Product Found:', product ? 'YES' : 'NO');

//   if (!product) {
//     throw createHttpError(404, 'Product not found');
//   }

//   res.status(200).json(product);
// };

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  // res.status(201).json(product);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const updateProduct = async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findByIdAndUpdate(
    // { _id: productId },
    productId,
    req.body,
    { new: true },
  );

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  // res.status(200).json(product);
  res.status(200).json({
    status: 200,
    message: 'Successfully updated the product!',
    data: product,
  });
};
