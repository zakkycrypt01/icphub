import pkg, {Types} from "mongoose";
const {Schema, model} = pkg;
import dotenv from "dotenv";
import exp from "constants";
dotenv.config();

const eventSchema = new Schema({
    eventTitle: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventStartTime: { type: String, required: true },
    eventEndTime: { type: String, required: true },
    timezone: { type: String, required: true },
    eventType: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
});

export default model("event", eventSchema);