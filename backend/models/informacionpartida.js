import { mongoose } from "mongoose";

const informacionpartidaSchema =mongoose.Schema({
    usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
    },
    muertes:{
        type:Number
    },
    danio:{
        type:Number

    },
    puesto:{
        type:Number
    }
    
   
},{
    timestamps:true
    }
)
const informacionpartida =mongoose.model("informacionpartida",informacionpartidaSchema)
export default informacionpartida