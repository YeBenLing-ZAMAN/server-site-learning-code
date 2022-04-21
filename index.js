const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');

app.get('/', (req, res) => {
    res.send('look this express for server make by zaman');
})

app.use(cors());
app.use(express.json());


/* app.get('/users', (req, res)=>{
    res.send('we found users');
}) */

// object send basic style 

/* app.get('/users', (req, res)=>{
    res.send({id:1, name: 'pias sarkar', job: 'shudu ghumai '});
}) */


const users = [
    { id: 1, name: 'manik bhai', email: "maink@gmail.com", phone: "0924242323" },
    { id: 2, name: 'zubayer bhai', email: "zubayer@gmail.com", phone: "0924242323" },
    { id: 3, name: 'mamun bhai', email: "mamun@gmail.com", phone: "0924242323" },
    { id: 4, name: 'tommoy bhai', email: "tommoy@gmail.com", phone: "0924242323" },
    { id: 5, name: 'farid bhai', email: "farid@gmail.com", phone: "0924242323" },
    { id: 6, name: 'sayem bhai', email: "sayem@gmail.com", phone: "0924242323" },
]

/**
 * looking for 1 items then use find()
 * lookin for more then 1 items then use filter()
 */


/* loaclhost eer ei req ta 5000 port dite hobe */
app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(u =>u.name.toLowerCase().includes(search));
        res.send(matched); 
    }else{
        res.send(users);
    }
});


app.get('/user/:id', (req, res) => {
    // console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user);
});

/* post req and respond */

app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})



/* listen port as a port your set */
app.listen(port, () => {
    console.log(`port running on ${port}`);
})
