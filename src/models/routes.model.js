import mongoose from "mongoose";

const routesSchema = new mongoose.Schema(
  {
    origenPlaceId: {
      type: String,
      // required: true,
    },
    destinoPlaceId: {
      type: String,
      // required: true,
    },
    distance: {
      type: String,
    },
    duration: {
      type: String,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true
    }
  });

export default mongoose.model("Routes", routesSchema);
