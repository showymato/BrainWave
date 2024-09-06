import mongoose from "mongoose";
import Order from "../order.model.js";

const medKitSchema = new mongoose.Schema({
    quantity: {
      type: Number,
      required: true,
    },
  });
  
  const MedKitOrder = Order.discriminator("MedKitOrder", medKitSchema);
  
  export { MedKitOrder };  