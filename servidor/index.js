const express = require('express');
const conectarDB = require('./config/db');

//crear el servidor
const app = express();

//conectar a la DB
conectarDB();

//puerto de la app
const PORT = process.env.PORT || 4000;



//arrancar la app
app.listen(PORT, () => {
    console.log(`Server online puerto ${PORT}`)
});