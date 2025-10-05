import express from 'express'
import { textMessageController } from '../controllers/messageController.js'
import { protect } from '../middlewares/auth.js'

const messageRouter = express.Router()

messageRouter.post("/text", protect, textMessageController)

export default messageRouter