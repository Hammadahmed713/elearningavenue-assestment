import Customer from "../models/CustomerSchema.js";
import mongoose from "mongoose";
const getData = async (req, res) => {
  try {
    Customer.aggregate(
      [
        {
          $match: {
            _id: mongoose.Types.ObjectId(req.params.id),
          },
        },
        {
          $lookup: {
            from: "customer",
            localField: "accounts",
            foreignField: "_id",
            as: "account",
          },
        },
        
      ],
      (err, result) => {
        if (err) {
          throw new Error(err.message);
        } else {
          res.send({ data: result }).status(200);
        }
      }
    );
  } catch (error) {
    res.status(400).send(error?.message);
  }
};

export default getData;
