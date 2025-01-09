import pkg, {Types} from "mongoose";
const {Schema, model} = pkg;
import dotenv from "dotenv";
import exp from "constants";
dotenv.config();

const companySchema = new Schema({
    companyname: {type: String, required: true},
    contactname: {type: String, required: true},
    email: {type: String, required: true},
    phonenum: {type: Number, required: true},
    website: {type: String, required: true},
    description : {type: String, required: true},
    telegramId: {type: Number, required: true},
});


export default model("company", companySchema);