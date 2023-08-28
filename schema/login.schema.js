import mongoose from "mongoose";
const {Schema} = mongoose;

const loginSchema = new Schema({
  username: String,
  password: Number
});

export default mongoose.model("User",loginSchema);
