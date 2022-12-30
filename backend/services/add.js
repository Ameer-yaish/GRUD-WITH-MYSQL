import { Router } from "express"
const router=Router()
import {q} from "./../dbconection.js"


    router.post("/add",(req,res)=>{
    let {name,price,description}=req.body
    q.execute(`INSERT INTO courses( name, price, description)
     VALUES ('${name}','${price}','${description}')`,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{console.log(result)}
    
     })
     res.json({messege:"success"})
}

)
export  {
    router
}