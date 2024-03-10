import { mongoose } from "mongoose";

const salasSchema =mongoose.Schema({
    idsala:{
        type:String,
        trim:true,
        require:true,
        default:"0"
    },
    fecha:{
        type:Date,
        default:Date.now(),
    },
    usuarios:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"informacionpartida",
    },
  
},{
    timestamps:true
    }
)
const salas =mongoose.model("salas",salasSchema)
export default salas