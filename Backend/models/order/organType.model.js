import mongoose from "mongoose";
import Order from "../order.model.js";

const organTypeSchema = new mongoose.Schema({
    age: {
      type: Number,
      required: true,
    },
    bloodType: {
      type: String,
      required: true,
    },
    organType: {
      type: String,
      required: true,
    },
  });
  
  const OrganOrder = Order.discriminator("OrganOrder", organTypeSchema);
  
  export { OrganOrder };
  