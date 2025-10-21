import mongoose from 'mongoose'
import { env } from './env.js'

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(env.MONGODB_URI)
		console.log('Connected to MongoDB: ', conn.connection.host)
	} catch (error) {
		console.error('Error connecting to MongoDB:', error.message)
		process.exit(1) // Process code: 1 means exit with failure, 0 means success
	}
}
