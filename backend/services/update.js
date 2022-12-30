app.put("/update",(req,res)=>{
    let {id,name,price,description}=req.body
    q.execute(`UPDATE courses 
    SET name='${name}',price='${price}',description='${description}' WHERE id=${id}`)
res.json({messege:"sucesess"})
})