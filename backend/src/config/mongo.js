import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 5000, // Set the connection timeout to 5 seconds
};

process.env.NODE_ENV = process.env.NODE_ENV || "dev";
dotenv.config();
const MONGO_URI = process.env.MONGODB_URI;
export function connectMongo() {
  console.log(`Connecting to DB ${MONGO_URI}`);
  mongoose
    .connect(MONGO_URI, connectOptions)
    .then(() => {
      console.log("MongoDB Connected");
      // Continue with your application logic
    })
    .catch((error) => {
      console.log("Failed to connect to MongoDB:", error);
    });
}