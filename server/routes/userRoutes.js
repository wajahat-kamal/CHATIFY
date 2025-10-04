import express from "express"
import { getUser, loginUser, registerUser } from "../controllers/userController";

const router = express.Router();

router.post("/register",registerUser)
router.post("/login",loginUser)
router.post("/data",getUser)

export default router