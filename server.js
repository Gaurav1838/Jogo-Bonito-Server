import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import jerseyRoutes from './routes/jerseyRoutes.js';
import contactRoutes from "./routes/ContactRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);
app.use('/api/products', jerseyRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => {
      console.log('Server running on port 5000'); 
    });
  })
  .catch((err) => console.error('Mongo connection error:', err));
