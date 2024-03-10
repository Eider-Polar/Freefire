import rangos from "../models/rangos.js"
import salas from "../models/salas.js";
// Función para agregar un rango de usuario
const puntuacion = async () => {    
    try {
        const puntos  = await salas.find({},'muertes').populate("usuarios");
        //if(puntos.usuarios.muertes ==5 ){
        const hola=    puntos.map(registro => ({
                muertes: registro.usuarios.muertes,
                danio: registro.usuarios.danio,
                puesto: registro.usuarios.puesto
              }
              ));
            console.log( hola);
     //   }
    } catch (error) {
        console.error("Error al agregar el rango de usuario:", error);
    }
}

 
export{puntuacion}