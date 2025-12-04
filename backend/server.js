const express = require('express');
const app = express();

const port = 3030;

app.get('/ok', (req, res) => {
    res.send('Hello World');
})

app.listen(port, ()=>{
    console.log(`App running on port https://localhost:${port}/`);
})