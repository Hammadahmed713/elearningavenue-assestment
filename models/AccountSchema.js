import { Schema, model } from "mongoose";

const accountSchema = new Schema({
  account_id: { type: Number, required: true },
  limit: { type: Number, required: true },
  products: { type: Array, required: true },
});

const Account = model("account", accountSchema);
export default Account;
