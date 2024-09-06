import mongoose from "mongoose";
import Order from "../order.model.js";

const medicineSchema = new mongoose.Schema({
    generic_name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
    //   required: true,
    },
    common_brands: {
      type: [String],
      // required: true,
    },
    composition: {
      type: String,
      // required: true,
    },
  });
  
  const MedicineOrder = Order.discriminator("MedicineOrder", medicineSchema);
  
  export { MedicineOrder };
  