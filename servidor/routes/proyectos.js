const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');

//Autenticar usuario
// api/proyectos

router.post('/',
    proyectoController.crearProyecto
);

module.exports = router;