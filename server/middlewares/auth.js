import jwt from "jsonwebtoken";
import User from "../models/user.model";


export const protect = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        const userId = decoded.id;

        const user = await User.findById(userId)
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Not authorized, user not found"
            })
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message:"Not authorized, token failed"
        })
    }
}