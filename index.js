const express = require('express')
const app = express()
const port = process.env.PORT ||5000;

app.get('/',(req,res)=>{
    res.send('look this express for server make by zaman');
})



/* listen port as a port your set */
app.listen(port,()=>{
    console.log(`port running on ${port}`);
})

