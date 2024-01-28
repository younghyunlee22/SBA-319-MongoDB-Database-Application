import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 160 },
  body: { type: String, required: true, minlength: 50 },
  user: { type: ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now, required: true },
});

export default mongoose.model("Post", postSchema);
