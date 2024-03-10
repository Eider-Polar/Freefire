import  Express  from "express"
import { agregarSala}from "../controllers/salaController.js"

const router=Express.Router();

router.post("/",agregarSala)




// router
//     .route("/:id")
//     .get(checkAuth,obtenerTarea)
//     .put(checkAuth,actualizarTarea)
//     .delete(checkAuth,eliminarTarea)

export default router
