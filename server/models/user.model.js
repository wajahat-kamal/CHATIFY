import mongoose from "mongoose";
 
const userSchema = new mongoose.connect({
    sender: {
        type: String,
        required: true,
        enum: ["user"]
    },
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model("User", userSchema)
export default User;