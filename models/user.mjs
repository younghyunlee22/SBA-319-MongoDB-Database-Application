import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: Number,
  firstName: String,
  lastName: String,
  email: String,
  username: String,
});

export default mongoose.model("User", userSchema);
