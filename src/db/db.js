

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI missing");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("DB connected");
  } catch (err) {
    console.log("DB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;






