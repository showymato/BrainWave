import express from "express"
import { getOrderCounts, showCompletedOrders, showEmergencyOrders, showInProcessOrders, showOrders } from "../controllers/order.controller.js";
import { insertManyOrganOrders, insertOrganOrder } from "../controllers/orders/organ.controller.js";
import { insertManyMedicines, insertMedicineOne } from "../controllers/orders/medicine.controller.js";
import { insertBloodOne, insertManyBlood } from "../controllers/orders/blood.controller.js";
import { insertManyMedkits, insertMedkitOne } from "../controllers/orders/medKit.controller.js";
import { newOrderData } from "../controllers/orders/newOrder.controller.js";


const app = express();
const router = express.Router();

// Orders Route
router.get("/showAll", showOrders);
router.get("/completed", showCompletedOrders);
router.get("/inProcess", showInProcessOrders);
router.get("/emergency", showEmergencyOrders);
router.get("/count", getOrderCounts);

// organ routes
router.post("/organ/insert", insertOrganOrder);
router.post("/organ/insertMany", insertManyOrganOrders);

// medicine routes
router.post("/medicine/insert", insertMedicineOne);
router.post("/medicine/insertMany", insertManyMedicines);

// blood routes
router.post("/blood/insert", insertBloodOne);
router.post("/blood/insertMany", insertManyBlood);

// blood routes
router.post("/medkit/insert", insertMedkitOne);
router.post("/medkit/insertMany", insertManyMedkits);

// new Drone Order placing
router.post("/newOrder", newOrderData)

export default router;