import { mongoose } from "mongoose";

const RangoUsuarioSchema =mongoose.Schema({
    rango:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"rangos",
    },
    usuarios:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
    }],
    
   
},{
    timestamps:true
    }
)
const RangoUsuario =mongoose.model("RangoUsuario",RangoUsuarioSchema)
export default RangoUsuario