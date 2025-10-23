import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true, // Automatically adds createdAt and updatedAt fields
	}
)

// Product name will be the name of the collection in MongoDB (automatically pluralized to 'products' by Mongoose)
const Product = mongoose.model('Product', productSchema)

export default Product
