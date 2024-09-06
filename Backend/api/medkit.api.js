const medkitOrder = [
    {
        "name": "Preeti",
        "location": "Delhi",
        "requestDate": "2024-09-21T00:00:00.000Z",
        "contact": "987654345",
        "status": "Completed",  // Updated to "In Process" as "Pending" is not in the enum
        "quantity": 2
    },
    {
        "name": "Vikram",
        "location": "Mumbai",
        "requestDate": "2024-09-22T00:00:00.000Z",
        "contact": "987654346",
        "status": "In Process",
        "quantity": 3
    },
    {
        "name": "Sanya",
        "location": "Chennai",
        "requestDate": "2024-09-23T00:00:00.000Z",
        "contact": "987654347",
        "status": "Completed",
        "quantity": 1
    },
    {
        "name": "Amit",
        "location": "Bangalore",
        "requestDate": "2024-09-24T00:00:00.000Z",
        "contact": "987654348",
        "status": "Emergency", // Updated to "Emergency" as "Cancelled" is not in the enum
        "quantity": 4
    },
    {
        "name": "Rita",
        "location": "Hyderabad",
        "requestDate": "2024-09-25T00:00:00.000Z",
        "contact": "987654349",
        "status": "Completed",
        "quantity": 2
    },
    {
        "name": "Rajesh",
        "location": "Pune",
        "requestDate": "2024-09-26T00:00:00.000Z",
        "contact": "987654350",
        "status": "In Process",
        "quantity": 1
    },
    {
        "name": "Meena",
        "location": "Jaipur",
        "requestDate": "2024-09-27T00:00:00.000Z",
        "contact": "987654351",
        "status": "Emergency", // Updated to "Emergency" as "Pending" is not in the enum
        "quantity": 5
    },
    {
        "name": "Anil",
        "location": "Kolkata",
        "requestDate": "2024-09-28T00:00:00.000Z",
        "contact": "987654352",
        "status": "Completed", // Updated to "Completed" as "Shipped" is not in the enum
        "quantity": 3
    },
    {
        "name": "Neha",
        "location": "Delhi",
        "requestDate": "2024-09-29T00:00:00.000Z",
        "contact": "987654353",
        "status": "Emergency", // Updated to "Emergency" as "Cancelled" is not in the enum
        "quantity": 2
    }
];

export default medkitOrder;
