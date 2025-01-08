import pkg, {Types} from "mongoose";
const {Schema, model} = pkg;
import dotenv from "dotenv";
import exp from "constants";
dotenv.config();

const inviteLeaderboardSchema = new Schema({
    rank: { type: Number, required: true }, 
    userId: { type: Schema.Types.ObjectId, ref: 'talent', required: true },
    score: { type: Number, required: true }, 
    lastUpdated: { type: Date, default: Date.now } 
});

export default model("inviteLeaderboard", inviteLeaderboardSchema);