import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const commentSchema = new Schema({
  id: { type: Number, require: true, unique: true },
  body: { type: String, required: true, minlength: 4 },
  postObjectId: { type: ObjectId },
  postId: { type: Number, index: true, require: true },
});

export default mongoose.model("Comment", commentSchema);
