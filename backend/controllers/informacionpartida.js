import informacionpartida from "../models/informacionpartida.js"
const agregarInfopartida= async (req,res)=>{
    try {
        const salaAlmacenada =await informacionpartida.create(req.body)
        res.json(salaAlmacenada)
        salaAlmacenada.save();

    } catch (error) {
        console.log(error)
    }

}

export {agregarInfopartida}