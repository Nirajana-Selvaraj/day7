

var express=require('express')
var app=express()
const PORT=3001
app.get('/',(req,res)=>{
    res.send('THIS IS NIRAJANA SELVARAJ')
})
app.get('/json',(req,res)=>{
    res.send({server:"Welcome",url:"localhost",port:PORT})
})
app.get('/static',(req,res)=>{
    res.sendFile('vite-project backend\index.html')
})
app.listen(PORT,()=>{
    console.log(`Backend server connected\nUrl:http://localhost:${PORT}`);
})


// when writing code listen mostly should be kept at last


