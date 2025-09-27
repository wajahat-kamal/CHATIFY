import express from "express"
import { message } from "../controllers/chatbot.message.js";
const chatbotRouter = express.Router()

chatbotRouter.get("/message", message)

export default chatbotRouter;