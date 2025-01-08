import pkg from "mongoose";
const {connect, connection, set} = pkg;

const connectDB = async (url) => {
    try {
        connection.once("open", () => console.log("Connected to database"));
        set("strictQuery", false);
        return connect(url);
    } catch(e){
        process.exit(1);
        }
    };

export default connectDB;
