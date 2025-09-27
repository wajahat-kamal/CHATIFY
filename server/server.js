import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;
const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // stop the server if DB connection fails
  }
}
connectDB();

// --- Middlewares ---
app.use(express.json());

// --- Routes ---
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

