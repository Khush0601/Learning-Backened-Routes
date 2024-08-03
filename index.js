// creating a server
const express=require('express')
const app=express()

// 1st middleware
const cb1=(req,res,next)=>{
    console.log('first callback')
    next()
}
// 2nd middleware
const cb2=(req,res,next)=>{
    console.log('second callback')
    next()
}
// ways to handle multiple middleware
app.get('/movies',[cb1,cb2],(req,res)=>{
    console.log('multiple handlers')
    res.status(200).send({
        message:"Movies"
    })
})
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

// app.all method : we have to chnage just http verb(method) and hit url then we will get same results
app.all('/studs',(req,res)=>{
    res.status(200).send({
        message:"handle all types of request"
    })
})
// starting server
app.listen(8000,()=>{
    console.log('server connected to port 8000')
})