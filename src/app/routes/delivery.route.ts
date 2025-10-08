import express from "express";
import deliveryController from "../controller/delivery.controller";


const router = express.Router();

router.post("/create", deliveryController.createDelivery);
router.get("/get/all", deliveryController.getDeliveries);
router.get("/get/:id", deliveryController.getDeliveryById);
router.put("/update/:id", deliveryController.updateDelivery);
router.delete("/delete/:id", deliveryController.deleteDelivery);

export default router;