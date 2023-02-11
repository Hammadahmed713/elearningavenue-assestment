import { Schema, model, Mongoose } from "mongoose";

const customerSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  birthdate: { type: Date, required: true },
  accounts: [{ type: Schema.Types.ObjectId, ref: "account" }],
});

const Customer = model("customer", customerSchema);
export default Customer;
