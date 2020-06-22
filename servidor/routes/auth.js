// rutas para autenticar usuario
const express = require('express');
const router = express.Router();
//validator
const {check} = require('express-validator');
//controller
const authController = require('../controllers/authController');


//Autenticar usuario
// api/auth
router.post('/',
    [
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({min: 6})
    ],
    authController.autenticarUsuario
);

module.exports = router;