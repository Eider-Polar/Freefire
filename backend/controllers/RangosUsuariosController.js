import rangos from "../models/rangos.js"


const agregarRangoUsuario= async (req,res)=>{
    

   

    
    try {
        const tareaAlmacenada =await rangos.create(req.body)
        res.json(tareaAlmacenada)

    } catch (error) {
        console.log(error)
    }

}

export {agregarRangoUsuario}