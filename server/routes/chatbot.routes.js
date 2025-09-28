import express from "express";
import { message } from "../controllers/chatbot.controller.js";

const chatbotRouter = express.Router();
chatbotRouter.post("/message", message);
chatbotRouter.get("/message", (req, res) => res.send("API Working"))
export default chatbotRouter;
