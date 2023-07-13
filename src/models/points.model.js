import mongoose from "mongoose";

const pointsSchema = new mongoose.Schema(
  {
    location: {
      name: String,
      placeId: String
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      // required: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Points", pointsSchema);
