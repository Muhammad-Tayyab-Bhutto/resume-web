import mongoose from "mongoose";
const { Schema } = mongoose;
const Blog = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", Blog);