import asyncHandler from 'express-async-handler';
import { Schema } from 'mongoose';
import { IRequest } from '../middlewares/auth';
import Product, { Review } from '../models/product';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req: IRequest, res) => {
	const pageSize = 10;
	const page = Number(req.query.pageNumber) || 1;

	const keyword = req.query.keyword
		? {
				name: {
					$regex: req.query.keyword as unknown as RegExp,
					$options: 'i',
				},
		  }
		: {};

	const count = await Product.countDocuments({ ...keyword });
	const products = await Product.find({ ...keyword })
		.limit(pageSize)
		.skip(pageSize * (page - 1));

	res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch all products
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error('Product not found!');
	}
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		await product.remove();

		res.json({ message: 'Product successfully removed' });
	} else {
		res.status(404);
		throw new Error('Product not found!');
	}
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req: IRequest, res) => {
	const product = new Product({
		name: 'Sample Name',
		price: 0,
		// eslint-disable-next-line no-underscore-dangle
		user: req.user?._id,
		image: '/images/sample.jpg',
		brand: 'Sample Brand',
		category: 'Sample Category',
		countInStock: 0,
		numReviews: 0,
		description: 'Sample Desc',
	});

	const createdProduct = await product.save();

	res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
	const { name, price, image, brand, category, countInStock, description } = req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		product.name = name;
		product.price = price;
		product.description = description;
		product.image = image;
		product.brand = brand;
		product.category = category;
		product.countInStock = countInStock;

		const updatedProduct = await product.save();

		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error('Product not Found!');
	}
});

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req: IRequest, res) => {
	const { rating, comment } = req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		const alreadyReviewed = product.reviews.find(
			// eslint-disable-next-line no-underscore-dangle
			(r) => r.user.toString() === req.user?._id.toString()
		);

		if (alreadyReviewed) {
			res.status(400);
			throw new Error('Product already Reviewed!');
		}

		const review: Review = {
			name: req.user?.name || '',
			rating: Number(rating),
			comment,
			// eslint-disable-next-line no-underscore-dangle
			user: req.user?._id as Schema.Types.ObjectId,
		};

		product.reviews.push(review);

		product.numReviews = product.reviews.length;
		product.rating =
			product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;

		await product.save();

		res.status(201).json({ message: 'Successfully reviewed!' });
	} else {
		res.status(404);
		throw new Error('Product not Found!');
	}
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({}).sort({ rating: -1 }).limit(4);

	res.json(products);
});

export {
	getProductById,
	getProducts,
	deleteProduct,
	createProduct,
	updateProduct,
	createProductReview,
	getTopProducts,
};
