import rangos from "../models/rangos.js"
import salas from "../models/salas.js";
const agregarSala= async (req,res)=>{
    try {
        const salaAlmacenada =await salas.create(req.body)
        res.json(salaAlmacenada)
        salaAlmacenada.save();

    } catch (error) {
        console.log(error)
    }

}

export {agregarSala}