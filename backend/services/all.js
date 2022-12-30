import { Router } from "express"
const router=Router()
import {q} from "./../dbconection.js"


router.get("/courses",(req,res)=>{
    q.execute(`SELECT * FROM courses`,(err,result)=>{
        res.json({courses:result})
    })
})
export default router