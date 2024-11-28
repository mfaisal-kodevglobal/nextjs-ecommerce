import { error, log } from "console";
import mongoose from "mongoose"

type ConnectionObject = {
    isConnected?:number;
}

const connection:ConnectionObject = {}

async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("Already Connected to Mongo Database");
    }

    try{
        const db = await mongoose.connect( process.env.MONGODB_URI || '', {} );
        connection.isConnected = db.connections[0].readyState;

        console.log("MONGO DB Connected Successfully");
        
    } catch (error) {
        console.log("Database connection failed", error);
        //process.exit(1);        
    }
}
export default dbConnect;