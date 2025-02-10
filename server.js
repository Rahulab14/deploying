const express=require('express');
const app=express();

const PORT=3030;

app.use(express.json)

app.get('/',(req,res)=>{
    res.status(200).send('Hello World')
})

app.post('/login',(req,res)=>{
    const{username,email,password,date_of_birth}=req.body
    if(!username){
        return res.status(400).send({message:'Username cannot be empty' })
    }
    if(!email){
        return res.status(400).send({message:'Email cannot be empty'})
    }
    if(!password.length<8||password.length>=16){
        return res.status(400).send({message:'Password length should be greater than 8 or less than or equal to 16'})
    }
    return res.status(200).send({message:'Login successfully'})
})

app.listen(PORT,()=>{
    console.log('Server is listen the port')
})
