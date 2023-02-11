import Customer from "../models/CustomerSchema.js";

export const addCustomer = async (request, response) => {
  const data = request.body;
  const newData = new Customer(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const getCustomers = async (request, response) => {
  try {
    const data = await Customer.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

