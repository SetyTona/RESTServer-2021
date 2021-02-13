require('dotenv').config();

// const Server = require('./models/server');

//const server = new Server();

//server.listen();



const express = require('express');
const app = express();

port = process.env.port;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/404NotFound.html')
        //res.send("HOLA MUNDO")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})