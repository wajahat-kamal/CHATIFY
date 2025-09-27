import express from "express"
import { message } from "../controllers/chatbot.message.js";
const chatbotRouter = express.Router()

chatbotRouter.post("/message", message)

export default chatbotRouter;