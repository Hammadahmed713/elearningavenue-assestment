import express from 'express'
import { config } from 'dotenv'
import Connection from "./config/db.js"
import cors from 'cors'
import DataRouter from "./routes/routes.js"
config()

const app = express()

app.use(express.json())
app.use(cors())
app.use('/',DataRouter)

app.listen(process.env.PORT,async()=>{
    await Connection()
    console.log(`Server is runing on port : ${process.env.PORT}`)
})