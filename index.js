// creating a server
const express=require('express')
const app=express()

app.get('/students',(req,res)=>{
    res.status(200).send({
        message:'Hello students'
    })
})

// creating new student

app.post('/students',(req,res)=>{
    res.status(201).send({
        message:'student created'
    })
})

// updating student

app.put('/students',(req,res)=>{
    res.status(200).send({
        message:'student details updated'
    })
})

app.delete('/students',(req,res)=>{
    res.status(200).send({
        message:'student details deleted'
    })
})
// starting server
app.listen(8000,()=>{
    console.log('server connected to port 8000')
})