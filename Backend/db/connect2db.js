import mongoose from "mongoose"

const connectToMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Mongodb");
    } catch (error) {
        console.log("Error while connecting to mongodb: ", error.message);
    }
}

export default connectToMongoDB;