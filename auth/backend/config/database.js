import mongoose, { model } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.set("strictQuery", false);

export const db = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log(err);
  });
