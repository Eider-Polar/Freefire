import  Express  from "express"
import { puntuacion}from "../controllers/sistemaDePuntuacionController.js"

const router=Express.Router();

router.post("/",puntuacion)




// router
//     .route("/:id")
//     .get(checkAuth,obtenerTarea)
//     .put(checkAuth,actualizarTarea)
//     .delete(checkAuth,eliminarTarea)

export default router
