import express from "express"
const app = express()
// import db from "./db.js"
import cors from "cors"

import routers from "./routers/auth_router.js"
import tporouters from "./routers/tpo_routers.js"

const PORT = process.env.PORT

const corsOptions = {
    origin:"http://localhost:5173",
    methods:"GET,POST,DELETE,PUT,PATCH,HEAD"
}
app.use(cors(corsOptions))
app.use(express.json())
app.use("/auth",routers)
app.use("/tpo",tporouters)
app.listen(PORT,()=>{console.log(`Listening to port: ${PORT}`)})