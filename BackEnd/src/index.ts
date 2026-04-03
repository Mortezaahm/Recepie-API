import app from "./app.js";
import dotenv from 'dotenv';
import connectDB from './config/mongo.js';

dotenv.config();
await connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
