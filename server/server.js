import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import chatbotRouter from "./routes/chatbot.routes.js";

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
    process.exit(1);
  }
}
connectDB();

// --- Middlewares ---
app.use(cors());
app.use(express.json());

// --- Routes ---
app.get("/", (req, res) => {
  res.send("API Working!");
});
app.use("/bot/v1", chatbotRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
