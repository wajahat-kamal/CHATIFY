import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      // options are optional in Mongoose 6+, but you can add if needed
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
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

// --- Graceful Shutdown ---
process.on("SIGINT", async () => {
  console.log("\n🔻 Shutting down...");
  await mongoose.connection.close();
  server.close(() => {
    console.log("✅ Server and DB connections closed");
    process.exit(0);
  });
});
