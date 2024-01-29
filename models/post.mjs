import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, trim: true, required: true, maxlength: 160 },
  body: { type: String, required: true, minlength: 50 },
  user: { type: ObjectId, ref: "User" },
  id: { type: Number, index: true, unique: true },
  userId: { type: Number },
  tags: { type: Array },
  reactions: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Post", postSchema);
