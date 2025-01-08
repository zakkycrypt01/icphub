import pkg, {Types} from "mongoose";
const {Schema, model} = pkg;
import dotenv from "dotenv";
import exp from "constants";
dotenv.config();

const talentSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    phonenum: {type: Number, required: true},
    telegram: {type: String, required: true},
    twitter : {type: String, required: true},
    PoF : {type: String, required: true},
    role : {type: String, required: true},
});


export default model("talent", talentSchema);