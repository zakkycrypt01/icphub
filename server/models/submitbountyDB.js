import pkg, {Types} from "mongoose";
const {Schema, model} = pkg;
import dotenv from "dotenv";
import exp from "constants";
dotenv.config();

const submitbountySchema = new Schema({
    PoF : {type: String, required: true},
    description : {type: String, required: true},
    address : {type: String, required: true},
    bounty_id: {type: Types.ObjectId, ref: "bounty"},
    talent_id: {type: Types.ObjectId, ref: "talent"},
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
});

export default model("submitbounty", submitbountySchema);