import Usuario from "../models/Usuarios.js";
import salas from "../models/salas.js";
// Función para agregar un rango de usuario
const puntuacion = async (res, req) => {
  try {
    const puntos = await salas.find({}).populate("usuario");
    //if(puntos.usuarios.muertes ==5 ){
    const hola = puntos.map((registro) => ({
      Usuario: registro.usuario._id,
      muertes: registro.kills,
      puesto: registro.posicion,
    }));
    //   }
  } catch (error) {
    console.error("Error al agregar el rango de usuario:", error);
  }
};

export { puntuacion };
