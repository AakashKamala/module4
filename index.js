const express=require("express")
require("dotenv").config()
const cors=require("cors")
const mongoose=require("mongoose")

//connect to mongodb
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log(err)
})

const app=express()
app.use(cors())
app.use(express.json())

//lol

app.get("/",(req,res)=>{
    res.send("Hello World")
})

const PORT=process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log("Server is running on port 3000")
})