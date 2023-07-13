import mongoose from "mongoose";

/**
 * The function `connectDB` connects to a MongoDB database named "merndb" running on the local machine.
 */
export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/merndb");
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
