import express from 'express'
import { connectDB } from './configs/db.js'
import productRoutes from './routes/productRoute.js'
<<<<<<< HEAD
import { env } from './configs/env.js'
=======
>>>>>>> 6e08bdbb6a4279d867ba9054a880f0e46f410d15

const app = express()

// Middleware to parse JSON request bodies
app.use(express.json())
<<<<<<< HEAD
=======

// Mount product routes
app.use('/api/products', productRoutes)
>>>>>>> 6e08bdbb6a4279d867ba9054a880f0e46f410d15

// Mount product routes
app.use('/api/products', productRoutes)

app.listen(env.PORT, () => {
	connectDB()
	console.log(`Server started at http://localhost:${env.PORT}`)
})
