import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    route: {
      type: String
    },
    status: {
      type: String,
      enum: ["pending", "processing", "completed", "cancelled"],
      default: "pending",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      // required: true
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
