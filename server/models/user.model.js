import mongoose from "mongoose";
 
const userSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   name: {
    type: String,
    required: true,
    unique: true,
   },
   password: {
    type: String,
    required: true
   },
   credits: {
    type: Number,
    default: 20
   },
})

// hashing password before saving
userSchema.pre()

const User = mongoose.model("User", userSchema)
export default User;