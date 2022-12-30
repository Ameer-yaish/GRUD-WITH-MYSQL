import mysql from "mysql2"

const q=mysql.createConnection({
    host:'localhost',
    database:'project',
    user:'root',
    password:''
})
export  {
    q
}