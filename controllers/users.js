// 2. Tiene que tener el mismo nombre que routes/users

// Destructuramos el response del express, para poderlo asignar al callback y que sepa que res, es de tipo respuesta. Con: res = response
const { response } = require('express');

// GET
const usuariosGET = (req, res = response) => {

    // Si por ejemplo queremos obtener un filtro en la llamada GET, y nos pasan algo como lo siguiente:
    // http://localhost:3031/api/usuarios/?nota=5&nombre=Josep&cpostal=08551
    // con esta instrucción, obtendriamos todo lo que nos viene como paramtros de la query
    // {"msg": "GET API en usuarios - Controlador",
    //   "query": {
    //                "nota": "5",
    //                "nombre": "Josep",
    //                "cpostal": "08551"
    //            }
    // Opción 1: Sin destructuración
    /*
    const query = req.query;

    res.status(200).json({ msg: "GET API en usuarios - Controlador", query });
    */

    // Opción 2: Con destructuración
    // http://localhost:3031/api/usuarios/?nota=5&cpostal=08551
    // al destructurar, le decimos que si no envian nombre, nosotros le daremos a la query nombre = 'No Name' por defecto
    // {
    //   "msg": "GET API en usuarios - Controlador",
    //   "nota": "5",
    //   "nombre": "No Name",
    //    "cpostal": "08551"
    // }

    const { nota, nombre = 'No Name', cpostal } = req.query;

    res.status(200).json({ msg: "GET API en usuarios - Controlador", nota, nombre, cpostal });

}

// POST
const usuariosPOST = (req, res = response) => {

    // Para leer los datos que nos envían en el body    

    // Opción 1 - Imprimimos todo el body
    /*
    const body = req.body;

    res.status(201).json({ msg: "POST API en usuarios - Controlador", body });
    */

    // Opción 2 - Destructuramos el body (si vienen más datos, los deshechamos)
    const { nombre, edad } = req.body;

    res.status(201).json({ msg: "POST API en usuarios - Controlador", nombre, edad });
}

// PUT
const usuariosPUT = (req, res = response) => {

    // Desestructuramos la ruta que nos llega en el request. 
    // Si llaman, con esto: http://localhost:3031/api/usuarios/13
    // id = 13
    // cabe decir que la definición del nombre (id), la hemos hecho en el fichero de rutas
    const { id } = req.params;

    res.status(200).json({ msg: "PUT API en usuarios - Controlador", id });

}

// PATCH
const usuariosPATCH = (req, res = response) => {
    res.status(200).json({ msg: "PACTH API en usuarios - Controlador" });
}

// DELETE
const usuariosDELETE = (req, res = response) => {
    res.status(200).json({ msg: "DELETE API en usuarios - Controlador" });
}

// Como vamos a exportar varios controladores, lo haremos mediante un objeto que "destrcuturaremos" luego.
module.exports = {
    usuariosGET,
    usuariosPOST,
    usuariosPUT,
    usuariosPATCH,
    usuariosDELETE
}