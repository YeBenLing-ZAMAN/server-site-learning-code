const express = require('express')
const app = express()
const port = process.env.PORT ||5000;

app.get('/',(req,res)=>{
    res.send('look this express for server developed');
})

app.listen(port,()=>{
    console.log(`port running on ${port}`);
})

