import { MedKitOrder } from "../../models/order/medKit.model.js";
import medkitOrder from "../../api/medkit.api.js";

export const insertMedkitOne = async (req, res) => {
    try {
        const { name, location, requestDate, contact, quantity} = req.body;

        // Validate required fields
        if (!name) return res.status(400).json({ error: "Name is required" });
        if (!location) return res.status(400).json({ error: "Location is required" });
        if (!requestDate) return res.status(400).json({ error: "Request date is required" });
        if (!contact) return res.status(400).json({ error: "Contact is required" });
        if (!quantity) return res.status(400).json({ error: "Quantity is required" });

         // Convert requestDate to a Date object
         const formattedDate = new Date(requestDate);

         // Create a new OrganOrder instance
         const newOrder = new MedKitOrder({
             name,
             location,
             requestDate: formattedDate,
             contact,
             quantity,
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

export const insertManyMedkits = async (req, res) => {
    try {
        await MedKitOrder.deleteMany({});
        const insertedOrders = await MedKitOrder.insertMany(medkitOrder);
        return res.status(201).json(insertedOrders);
    } catch (error) {
        console.error("Error inserting many organ orders: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};