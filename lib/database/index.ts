import mongoose from 'mongoose';

let cachedConnection = (global as any).mongoose || {conn:null , promise: null};

const MONGODB_URI = "mongodb+srv://user:user@cluster0.6zcerbm.mongodb.net/?retryWrites=true&w=majority";
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


// const MONGODB_URI = "mongodb+srv://user:user@cluster0.6zcerbm.mongodb.net/app_event";

// export const connectToDataBase=async ()=> {
//   try {

//     await mongoose.connect(MONGODB_URI);

//     const db = mongoose.connection;
//     mongoose.set("strictQuery", true);
//     db.on("error", (error:any) => {
//       console.error("MongoDB connection error:", error);
//     });

//     db.once("open", () => {
//       console.log("MongoDB connected successfully");
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

