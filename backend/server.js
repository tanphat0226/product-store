import express from 'express'
import { connectDB } from './configs/db.js'
import path from 'path'
import productRoutes from './routes/productRoute.js'

import { env } from './configs/env.js'

const app = express()

const __dirname = path.resolve()

// Middleware to parse JSON request bodies
app.use(express.json())

// Mount product routes
app.use('/api/products', productRoutes)

if (env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'frontend', 'dist')))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
	})
}

app.listen(env.PORT, () => {
	connectDB()
	console.log(`Server started at http://localhost:${env.PORT}`)
})
