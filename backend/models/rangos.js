import { mongoose } from "mongoose";

const rangosSchema =mongoose.Schema({
    rango:{
        type:String,
        trim:true,
        require:true,
      
    },
    puntosRequeridos:{
        type:Number,
        trim:true,
        default:"0"
    },
   
   
},{
    timestamps:true
    }
)
const rangos =mongoose.model("rangos",rangosSchema)
export default rangos