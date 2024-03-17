import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("🚀 MongoDB connected successfully");
  } catch (error) {
    console.log("MONGO db connection failed !!! ", error);
    process.exit(1);
  }
};

export default connectDB;
