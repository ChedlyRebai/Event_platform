import mongoose from 'mongoose';

let cachedConnection = (global as any).mongoose || {conn:null , promise: null};

const MONGODB_URI = process.env.MONGODB_URI;
export const connectToDataBase= async () =>{
    if(cachedConnection.conn){
        return cachedConnection.conn;
    }

    if(MONGODB_URI) throw new Error("please Provide MONGODB_URI");

    cachedConnection.promise =cachedConnection.promise || mongoose.connect(MONGODB_URI as string,{
        dbName:"event_app",
        bufferCommands:false,
    })

    cachedConnection.conn =await cachedConnection.promise;
    return cachedConnection.conn;
}