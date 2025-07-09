import express from "express"
const app = express()
// import db from "./db.js"

import routers from "./routers/auth_router.js"
import tporouters from "./routers/tpo_routers.js"

const PORT = process.env.PORT
app.use(express.json())
app.use("/auth",routers)
app.use("/tpo",tporouters)
app.listen(PORT,()=>{console.log(`Listening to port: ${PORT}`)})