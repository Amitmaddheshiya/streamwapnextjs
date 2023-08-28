import mongoose from "mongoose";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect(process.env.DB_URL,options);
export default mongoose;
