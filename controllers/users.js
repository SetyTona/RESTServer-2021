// 2. Tiene que tener el mismo nombre que routes/users

// Destructuramos el response del express, para poderlo asignar al callback y que sepa que res, es de tipo respuesta. Con: res = response
const { response } = require('express');

// GET
const usuariosGET = (req, res = response) => {
    res.status(200).json({ msg: "GET API en usuarios - Controlador" });
}

// POST
const usuariosPOST = (req, res = response) => {
    res.status(201).json({ msg: "POST API en usuarios - Controlador" });
}

// PUT
const usuariosPUT = (req, res = response) => {
    res.status(200).json({ msg: "PUT API en usuarios - Controlador" });
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