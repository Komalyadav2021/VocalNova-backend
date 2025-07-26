import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"


const app=express()
app.use(cors({
    origin:"https://vocalnova-frontend.onrender.com",
    credentials:true
}))
const port=process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("✅ VocalMind backend is up and running!");
});


app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


app.listen(port,()=>{
    connectDb()
    console.log(`Sever is successfully connected to PORT : ${port}`)
})

