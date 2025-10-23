import 'dotenv/config'

export const env = {
	MONGODB_URI:
		process.env.MONGODB_URI || 'mongodb://localhost:27017/products',

	PORT: process.env.PORT || 5000,
}
