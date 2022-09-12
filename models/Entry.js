import mongoose from "mongoose";
const { Schema } = mongoose;
const EntrySchema = new Schema({
  createdAt:{
    type: Date,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
  otp: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
});

export default mongoose.model("entry", EntrySchema);
