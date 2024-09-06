import Order from "../models/order.model.js"

export const showOrders = async(req, res) => {
    try {
        const orders = await Order.find();
        return res.status(200).json(orders);
    } catch (error) {
        console.log("Error while displaying orders: ", error.message);
    }
}

export const showCompletedOrders = async(req, res) => {
    try {
        const completedOrders = await Order.find({status: "Completed"});
        return res.status(200).json(completedOrders);
    } catch (error) {
        console.log("Error while displaying completed orders: ", error.message);
    }
}

export const showInProcessOrders = async(req, res) => {
    try {
        const inProcessOrders = await Order.find({status: "In Process"});
        return res.status(200).json(inProcessOrders);
    } catch (error) {
        console.log("Error while displaying in process orders: ", error.message);
    }
}

export const showEmergencyOrders = async(req, res) => {
    try {
        const emergencyOrders = await Order.find({status: "Emergency"});
        return res.status(200).json(emergencyOrders);
    } catch (error) {
        console.log("Error while displaying emergency orders: ", error.message);
    }
}

export const getOrderCounts = async (req, res) => {
    try {
        // Aggregate counts based on the discriminatorKey `orderType`
        const orderCounts = await Order.aggregate([
            {
                $group: {
                    _id: '$status', // Group by the discriminatorKey `orderType`
                    count: { $sum: 1 } // Count the number of occurrences
                }
            }
        ]);

        const totalOrders = await Order.countDocuments({});

        // Transform the result into a more readable format
        const formattedCounts = orderCounts.reduce((acc, { _id, count }) => {
            acc[_id] = count;
            return acc;
        }, {});

        // Send the counts as a response
        console.log(formattedCounts);
        res.status(200).json({ totalOrders, countsByType: formattedCounts });
    } catch (error) {
        console.error('Error fetching order counts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};