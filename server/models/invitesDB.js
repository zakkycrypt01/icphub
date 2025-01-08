import pkg, {Types} from "mongoose";
const {Schema, model} = pkg;
import dotenv from "dotenv";
dotenv.config();

const invitesSchema = new Schema({
    referredId: { type: Number ,required: true },
    referrerId: { type: Number, required: true },
    status: { type: String, required: true },
});

export default model("invites", invitesSchema);