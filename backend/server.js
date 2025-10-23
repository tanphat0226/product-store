import express from 'express'
import { connectDB } from './configs/db.js'
import productRoutes from './routes/productRoute.js'

const app = express()

// Middleware to parse JSON request bodies
app.use(express.json())

// Mount product routes
app.use('/api/products', productRoutes)

app.listen(5000, () => {
	connectDB()
	console.log('Server started at http://localhost:5000')
})
