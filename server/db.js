import pkg from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const {connect, connection, set} = pkg;

const getUrl = async () => {
    const url = process.env.MONGO_URI ||`mongodb://${DB_HOST}:${PORT}`;
    const PORT = process.env.PORT || 2001;
    const DB_HOST = process.env.DB_HOST || "localhost";
    const DB_DATABASE = process.env.DB_DATABASE || "test";
    await connectDB(url);
}


const connectDB = async (url) => {
    console.log('url :>> ', url);
    try {
        connection.once("open", () => console.log("Connected to database"));
        set("strictQuery", false);
        return connect(url);
    } catch(e){
        process.exit(1);
        }
    };

export default connectDB;
