import mongoose from "mongoose";


const MONGO_URI = process.env.MONGO_URI;

const connectDB = async() => {
  try {
    await mongoose.connect(`${MONGO_URI}/chatify`);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
}

export default connectDB