import express from "express";
import dotenv from "dotenv";
import usuarioRouters from './routers/usuariosRouters.js';
import proyectoRouters from './routers/proyectoRouters.js';
import conectarDB from "./config/db.js";
import rangosRouter from "./routers/rangosRouters.js"
import informacionPRouters from"./routers/informacionPRouters.js"
import salaRouters from "./routers/salasRouters.js"
import sistemaDePuntuacion from "./routers/sistemaDePuntuacion.js"
const app=express();
app.use(express.json());
dotenv.config();
conectarDB();

//ROuting
app.use('/api/usuarios',usuarioRouters)
app.use('/api/proyectos',proyectoRouters)
app.use('/api/rangos',rangosRouter)
app.use('/api/InformacionPArtida',informacionPRouters)
app.use('/api/sala',salaRouters)
app.use('/api/puntos',sistemaDePuntuacion)
const PORT = process.env.PORT || 8080;

app.listen(8080, () =>{
    console.log(`https//localhost:5500 ${PORT}`);
});