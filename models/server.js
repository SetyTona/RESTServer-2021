const express = require('express');
const cors = require('cors');

class Server {
    constructor() {

        this.app = express();

        // OJO !!!! Es muy importante que la palabra PORT, vaya en mayúsculas !!! Sino en producción (en heroku), se cuelga (aunque en pruebas va bien)
        this.port = process.env.PORT;

        // Definiriamos aquí, mediante propiedades, las rutas de la API, según su naturaleza    
        this.APIPathUsuarios = '/api/usuarios' // Por ejemplo, la API de CRUD de usuario

        // Middlewares
        this.middlewares();

        // rutas de mi aplicación    
        this.routes();
    }

    // Middlewares (son funciones que añaden funcionalidad a la web)
    middlewares() {

        // Middleware para proteger el backend e indicarle que origenes podrán hacernos peticiones (SIEMPRE es bueno configurarlo e instalarlo)
        this.app.use(cors());

        // Middleware - Lectura y parseo de la información del BODY
        // Indicamos de esta forma que cualquier información que venga en el BODY -> RAW -> vendrá en formato JSON.
        // Da igual si viene por el PUT, POST, DELETE, PATCH (get no tiene información en el body)
        this.app.use(express.json());

        // .use -> Es la palabra clave que me indica que es un middleware
        this.app.use(express.static('public')); // dónde public es la carpeta que servirá estatica que servirá los ficheros (Directorio a publicar)

    }

    // definición del mapa de rutas    
    routes() {

        // Colocamos un Middleware que hará que cuando soliciten esta ruta con usuarios, lance una llamada al fichero correspondiente (situado en el require)
        this.app.use(this.APIPathUsuarios, require('../routes/users'));


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