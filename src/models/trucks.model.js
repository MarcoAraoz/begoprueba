import mongoose from "mongoose";

const trucksSchema = new mongoose.Schema(
  {
  model:{
    type: String
  },
  make:{
    type: String 
  },
  year:{
    type: Number
  },
  color:{
    type: String
  },
  transportWeight:{
    type: Number
  },
  created_at:{
    type: Number
  }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Trucks", trucksSchema);
