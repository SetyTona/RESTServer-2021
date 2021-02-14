// 1. Tiene que tener el mismo nombre que controllers/users

// Desestructuramos la función Router del parquete express
const { Router } = require('express');
// Llamamos la función a la cual vamos a configurar las rutas
const router = Router();

// importamos las funciones de los controladores
const {
    usuariosGET,
    usuariosPOST,
    usuariosPUT,
    usuariosPATCH,
    usuariosDELETE
} = require('../controllers/users')

// GET  
//       Se usa normalmente para obtener datos.
//       Fijemonos que no estamos ejecutando la función. Eso se haría con esto: usuariosGET(), 
//       sino que estamos enviando la referencia a la misma, con: usuariosGET
router.get('/', usuariosGET)

// POST  
//       Se usa normalmente para obtener datos.
//       Fijemonos que no estamos ejecutando la función. Eso se haría con esto: usuariosGET(), 
//       sino que estamos enviando la referencia a la misma, con: usuariosGET
router.post('/', usuariosPOST)

// PUT 
//       Se usa normalmente para obtener datos.
//       Fijemonos que no estamos ejecutando la función. Eso se haría con esto: usuariosGET(), 
//       sino que estamos enviando la referencia a la misma, con: usuariosGET
router.put('/', usuariosPUT)

// PATCH  
//       Se usa normalmente para obtener datos.
//       Fijemonos que no estamos ejecutando la función. Eso se haría con esto: usuariosGET(), 
//       sino que estamos enviando la referencia a la misma, con: usuariosGET
router.patch('/', usuariosPATCH)

// DELETE
//       Se usa normalmente para obtener datos.
//       Fijemonos que no estamos ejecutando la función. Eso se haría con esto: usuariosGET(), 
//       sino que estamos enviando la referencia a la misma, con: usuariosGET
router.delete('/', usuariosDELETE)

module.exports = router;