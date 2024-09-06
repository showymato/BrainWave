import { BloodOrder } from "../../models/order/blood.model.js";
import bloodOrder from "../../api/bloodOrders.api.js";

export const insertBloodOne = async (req, res) => {
    try {
        const { name, location, requestDate, contact, bloodType} = req.body;

        // Validate required fields
        if (!name) return res.status(400).json({ error: "Name is required" });
        if (!location) return res.status(400).json({ error: "Location is required" });
        if (!requestDate) return res.status(400).json({ error: "Request date is required" });
        if (!contact) return res.status(400).json({ error: "Contact is required" });
        if (!bloodType) return res.status(400).json({ error: "Blood Type is required" });

         // Convert requestDate to a Date object
         const formattedDate = new Date(requestDate);

         // Create a new OrganOrder instance
         const newOrder = new BloodOrder({
             name,
             location,
             requestDate: formattedDate,
             contact,
             bloodType,
             status: "In Process", // Default status
        }); 


        await newOrder.save();
        console.log(newOrder);

        // Respond with the created order
        return res.status(201).json({ message: 'Order inserted successfully', data: newOrder });
    } catch (error) {
        console.error('Error inserting order:', error);
        res.status(500).json({ error: 'Failed to insert order' });
    }
};

export const insertManyBlood = async (req, res) => {
    try {
        await BloodOrder.deleteMany({});
        const insertedOrders = await BloodOrder.insertMany(bloodOrder);
        return res.status(201).json(insertedOrders);
    } catch (error) {
        console.error("Error inserting many organ orders: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};