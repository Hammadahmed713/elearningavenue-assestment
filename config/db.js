import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected Succesfully`);
  } catch (error) {
    console.log(error.message);
  }
};

export default Connection;
