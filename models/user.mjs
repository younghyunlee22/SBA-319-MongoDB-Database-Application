import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: { type: Number, require: true, index: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  username: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
