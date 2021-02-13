require('dotenv').config();

// const Server = require('./models/server');

//const server = new Server();

//server.listen();



const express = require('express');
const app = express();

const port = process.env.PORT; // utilizamos la variable de entorno, llamada PORT 

// Si ponen una ruta que no existe, lo redirigimos
app.get('*', (req, res) => {
    res.sendFile(__dirname + "/public/404NotFound.html")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})