import  Express  from "express"
import { agregarRango}from "../controllers/rangoController.js"

const router=Express.Router();

router.post("/",agregarRango)




// router
//     .route("/:id")
//     .get(checkAuth,obtenerTarea)
//     .put(checkAuth,actualizarTarea)
//     .delete(checkAuth,eliminarTarea)

export default router
