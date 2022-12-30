const express = require('express');
const app = express();
var cors = require('cors')
const mysql = require('mysql2');

const q=mysql.createConnection({
    host:'localhost',
    database:'node_1',
    user:'root',
    password:''
});
app.use(express.json());
app.use(cors());
/*1- add course  */
app.post('/addCourse',(req,res)=>{
    let {name,price,cat,description}= req.body;
    q.execute(`INSERT INTO courses(name,cat,price,description)
               VALUES('${name}','${cat}','${price}','${description}')
    `);
    res.json({message:'success'});
});
// 2- get all courses
app.get('/courses',(req,res)=>{

    q.execute(`SELECT * FROM courses`,(err,result)=>{
        if(err){
            res.json({message:err});
        }
        res.json({message:'success',courses:result});
    });

});
// 3- update course
app.put('/update',(req,res)=>{
    let {id,name,price,cat,description}= req.body;
    q.execute(`UPDATE courses SET name='${name}',price='${price}',cat='${cat}',
    description='${description}' where id =${id}`,(err,result)=>{
        if(err){
           
            res.json({message:err});
        }else
        res.json({message:'updated successfully'});
    });
});
//4- delete course 
app.delete('/delete',(req,res)=>{
    let {id}=req.body;
    q.execute(`DELETE FROM courses where id = ${id}`);
    res.json({message:'delete success'});
})
app.listen(3000);