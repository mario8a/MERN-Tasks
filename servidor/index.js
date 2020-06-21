const express = require('express');
const conectarDB = require('./config/db');

//crear el servidor
const app = express();

//conectar a la DB
conectarDB();

//habilitar express.json, ayuda a leer datos que el usuario coloque
app.use(express.json({extended:true}));

//puerto de la app
const PORT = process.env.PORT || 4000;

//importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));


//arrancar la app
app.listen(PORT, () => {
    console.log(`Server online puerto ${PORT}`)
});