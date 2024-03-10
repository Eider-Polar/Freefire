import  Express  from "express"
import { agregarInfopartida}from "../controllers/informacionpartida.js"

const router=Express.Router();

router.post("/",agregarInfopartida)




// router
//     .route("/:id")
//     .get(checkAuth,obtenerTarea)
//     .put(checkAuth,actualizarTarea)
//     .delete(checkAuth,eliminarTarea)

export default router
