import { OrganOrder } from "../../models/order/organType.model.js";
import organOrdersApi from "../../api/organ.api.js";

export const insertOrganOrder = async (req, res) => {
    try {
        // Destructure the necessary fields from the request body
        const { name, location, requestDate, contact, age, bloodType, organType } = req.body;

        // Validate required fields
        if (!name) return res.status(400).json({ error: "Name is required" });
        if (!location) return res.status(400).json({ error: "Location is required" });
        if (!requestDate) return res.status(400).json({ error: "Request date is required" });
        if (!contact) return res.status(400).json({ error: "Contact is required" });
        if (!age) return res.status(400).json({ error: "Age is required" });
        if (!bloodType) return res.status(400).json({ error: "Blood type is required" });
        if (!organType) return res.status(400).json({ error: "Organ type is required" });

        // Convert requestDate to a Date object
        const formattedDate = new Date(requestDate);

        // Create a new OrganOrder instance
        const newOrder = new OrganOrder({
            name,
            location,
            requestDate: formattedDate,
            contact,
            age,
            bloodType,
            organType,
            status: "In Process", // Default status
        });

        // Save the new order to the database
        await newOrder.save();
        console.log(newOrder);

        // Respond with the created order
        return res.status(201).json(newOrder);
    } catch (error) {
        console.error("Error while inserting organ order: ", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const insertManyOrganOrders = async (req, res) => {
    try {
        await OrganOrder.deleteMany({});
        const insertedOrders = await OrganOrder.insertMany(organOrdersApi);
        return res.status(201).json(insertedOrders);
    } catch (error) {
        console.error("Error inserting many organ orders: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

