import { config } from 'dotenv';
import mongoose, { Error } from 'mongoose';

config();

const connectDB = async () => {
    try {
      // const { MONGO_USER, MONGO_PASS, MONGO_CLUSTER, MONGO_DB, MONGODB_URI } = process.env;

      // const uri = MONGODB_URI || `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_CLUSTER}/${MONGO_DB}?retryWrites=true&w=majority`;
       console.log(process.env.MONGODB_URI);
      await mongoose.connect(process.env.MONGODB_URI!);

      console.log("MongoDB Atlas connected");
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
      console.error("MongoDB connection failed:", message);
      process.exit(1);
    }
  };


export default connectDB;
