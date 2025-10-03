import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    mongoose.connection.on("connected", () => {
      console.log("✅ Connected to MongoDB");
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
  }
};

export default connectDB;
