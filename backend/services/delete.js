app.delete("/delete",(req,res)=>{
    let {id}=req.body
    q.execute(`DELETE FROM courses WHERE id=${id}`)
    res.json({messege:"sucesess"})
})