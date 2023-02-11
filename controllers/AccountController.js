import Account from "../models/AccountSchema.js";

export const addAccount = async (request, response) => {
  const data = request.body;
  const newData = new Account(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const getAccounts = async (request, response) => {
  try {
    const data = await Account.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

