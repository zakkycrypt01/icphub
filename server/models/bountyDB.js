import pkg, {Types} from "mongoose";
const {Schema, model} = pkg;
import dotenv from "dotenv";
import exp from "constants";
import e from "express";
dotenv.config();

const bountySchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    reward: { type: String, required: true },
    deadline: { type:String, required: true },
    skills: { type: [String], required: true },
    bountyid: { type: String, required: true },
    applicants: { type: Number, default: 0 },
    status: {
        type: String,
        enum: ["ongoing", "in-review", "completed"],
        default: "ongoing"
    },
    postedby: {
        type: String,
        enum: ['admin', 'company'],
        required: true
    },
    companyname: { 
        type: String,
        required: function() {
            return this.postedBy === 'company'; // Make it required only if postedBy is 'company'
        }
    },
});



export default model("bounty", bountySchema);