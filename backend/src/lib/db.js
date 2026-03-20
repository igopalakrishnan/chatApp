import mongoose, { mongo } from 'mongoose';

export const connectDB = async() =>{
try {
    const conn = await mongoose.connect(process.env.MONGO_DB);
    console.log(`MongoDb connected: ${conn.connection.host}`)
} catch (error) {
    console.log("MongoDB connection erro:", error)
}
}