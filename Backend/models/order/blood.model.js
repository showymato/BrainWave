import mongoose from "mongoose";
import Order from "../order.model.js";

const bloodSchema = new mongoose.Schema({
    bloodType: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      // required: true,
    },
  });
  
  const BloodOrder = Order.discriminator("BloodOrder", bloodSchema);
  
  export { BloodOrder };  