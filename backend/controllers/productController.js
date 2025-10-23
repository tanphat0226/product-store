import mongoose from 'mongoose'
import Product from '../models/productModel.js'

export const getProducts = async (req, res) => {
	try {
		const products = await Product.find({})
		res.status(200).json({
			success: true,
			data: products,
		})
	} catch (error) {
		console.error('Get products error:', error.message)
		res.status(500).json({
			success: false,
			message: 'Server error',
		})
	}
}

export const createProduct = async (req, res) => {
	const product = req.body // User will be sending product data in request body

	if (!product.name || !product.price || !product.image) {
		return res.status(400).json({
			success: false,
			message: 'All product fields are required',
		})
	}

	const newProduct = new Product(product)

	try {
		await newProduct.save()

		res.status(201).json({
			success: true,
			data: newProduct,
		})
	} catch (error) {
		console.error('Create product error:', error.message)

		res.status(500).json({
			success: false,
			message: 'Server error',
		})
	}
}

export const updateProduct = async (req, res) => {
	const { id } = req.params
	const product = req.body

	if (mongoose.Types.ObjectId.isValid(id) === false) {
		return res.status(400).json({
			success: false,
			message: 'Invalid product ID',
		})
	}

	try {
		const updatedProduct = await Product.findByIdAndUpdate(id, product, {
			new: true, // Return the updated document
		})

		if (!updatedProduct) {
			return res.status(404).json({
				success: false,
				message: 'Product not found',
			})
		}

		res.status(200).json({
			success: true,
			data: updatedProduct,
		})
	} catch (error) {
		console.error('Update product error:', error.message)
		res.status(500).json({
			success: false,
			message: 'Server error',
		})
	}
}

export const deleteProduct = async (req, res) => {
	const { id } = req.params

	try {
		await Product.findByIdAndDelete(id)

		res.status(200).json({
			success: true,
			message: 'Product deleted successfully',
		})
	} catch (error) {
		console.error('Delete product error:', error.message)
		res.status(500).json({
			success: false,
			message: 'Server error',
		})
	}
}
