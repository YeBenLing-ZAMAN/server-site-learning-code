const express = require('express')
const app = express()
const port = process.env.PORT ||5000;

app.get('/',(req,res)=>{
    res.send('look this express for server make by zaman');
})



/* app.get('/users', (req, res)=>{
    res.send('we found users');
}) */

// object send basic style 

/* app.get('/users', (req, res)=>{
    res.send({id:1, name: 'pias sarkar', job: 'shudu ghumai '});
}) */


const users =[
    {id:1 , name :'manik bhai', email:"maink@gmail.com", phone:"0924242323"},
    {id:2 , name :'zubayerbhai', email:"zubayer@gmail.com", phone:"0924242323"},
    {id:3 , name :'mamun bhai', email:"mamun@gmail.com", phone:"0924242323"},
    {id:4 , name :'tommoy bhai', email:"tommoy@gmail.com", phone:"0924242323"},
    {id:5 , name :'farid bhai', email:"farid@gmail.com", phone:"0924242323"},
    {id:6 , name :'sayem bhai', email:"sayem@gmail.com", phone:"0924242323"},
]

app.get('/users', (req,res)=>{
    res.send(users);
})


app.get('/user/:id',(req,res)=>{
    // console.log(req.params);
    const id = req.params.id;
    const user = users.find(user=> user.id==id);
    res.send(user);
})
/* listen port as a port your set */
app.listen(port,()=>{
    console.log(`port running on ${port}`);
})

