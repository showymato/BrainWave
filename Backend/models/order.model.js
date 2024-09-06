import mongoose from "mongoose"

const orderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true
        },
        requestDate: {
            type: Date,
            required: true,
            get: (v) => v.toISOString().split('T')[0],
        },
        contact: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: ["Completed", "In Process", "Emergency"]
        }
    },
    {
        timestamps: true,
        discriminatorKey: "orderType"
    }
)

const Order = mongoose.model("Order", orderSchema);
export default Order;