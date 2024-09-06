import { MedicineOrder } from "../../models/order/medicine.model.js";
import medicineOrders from "../../api/medicineOrders.api.js";

// Insert a single medicine order
export const insertMedicineOne = async (req, res) => {
    try {
        const { name, location, requestDate, contact, generic_name} = req.body;

        // Validate required fields
        if (!name) return res.status(400).json({ error: "Name is required" });
        if (!location) return res.status(400).json({ error: "Location is required" });
        if (!requestDate) return res.status(400).json({ error: "Request date is required" });
        if (!contact) return res.status(400).json({ error: "Contact is required" });
        if (!generic_name) return res.status(400).json({ error: "Medicine name is required" });

         // Convert requestDate to a Date object
         const formattedDate = new Date(requestDate);

         // Create a new OrganOrder instance
         const newOrder = new MedicineOrder({
             name,
             location,
             requestDate: formattedDate,
             contact,
             generic_name,
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

export const insertManyMedicines = async (req, res) => {
    try {
        await MedicineOrder.deleteMany({});
        const insertedOrders = await MedicineOrder.insertMany(medicineOrders);
        return res.status(201).json(insertedOrders);
    } catch (error) {
        console.error("Error inserting many organ orders: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};