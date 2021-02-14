const express = require('express');
const cors = require('cors');

class Server {
    constructor() {

        this.app = express();
        this.port = process.env.port;

        // Middlewares
        this.middlewares();

        // rutas de mi aplicación    
        this.routes();
    }

    // Middlewares (son funciones que añaden funcionalidad a la web)
    middlewares() {

        this.app.use(cors()); // Middleware para proteger el backend e indicarle que origenes podrán hacernos peticiones

        // .use -> Es la palabra clave que me indica que es un middleware
        this.app.use(express.static('public')); // dónde public es la carpeta que servirá estatica que servirá los ficheros (Directorio a publicar)

    }

    // definición del mapa de rutas    
    routes() {

        // GET - Se usa normalmente para obtener datos
        this.app.get('/api', (req, res) => {
            res.status(200).json({ msg: "get API" })
        })

        // PUT - Se usa normalmente para modificar datos
        this.app.put('/api', (req, res) => {
            res.status(202).json({ msg: "put API" })
        })

        // POST - Se usa normalmente para crear nuevos registros
        this.app.post('/api', (req, res) => {
            res.status(201).json({ msg: "post API" })
        })

        // DELETE - Se usa normalmente para borrar datos (no necesariamente significa una eliminación física de la BBDD, 
        //          también puede ser un centinela que indica que está inactivo)
        this.app.delete('/api', (req, res) => {
            res.status(200).json({ msg: "delete API" })
        })

        // Para devolver una página web, si no envían una petición correcta
        // Explicación de cómo utilizar el dirname, etc: 
        // https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname
        this.app.get('*', (req, res) => {
            res.sendFile(process.cwd() + '/public/404NotFound.html')
        })

    }

    // activar el servidor para que "escuche" y mensaje conforme está escuchando
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        })
    }
}

module.exports = Server;