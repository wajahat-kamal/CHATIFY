import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()
const port = process.env.PORT || 3000
dotenv.config()

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Connect DB");
}).catch((error) => {
  console.log("Failedto Connect", error);
  
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
