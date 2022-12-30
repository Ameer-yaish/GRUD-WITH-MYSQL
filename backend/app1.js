import express from "express"
const app=express()

import {router} from "./services/add.js"
import courses from "./services/all.js"
app.use(express.json())
app.use(router)
app.use (courses)
app.listen(3000,()=>{
    console.log("running")
})
