import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(8000, () => {
    console.log(`Server started at port: 8000`);
    connectDB();
});