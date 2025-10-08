import express from "express";
import deliveryPartnerController from "../controller/deliveryPartner.controller";


const router = express.Router();
router.post("/create", deliveryPartnerController.createDeliveryPartner);
router.get("/get/all", deliveryPartnerController.getDeliveryPartners);
router.get("/get/:id", deliveryPartnerController.getDeliveryPartnerById);
router.put("/update/:id", deliveryPartnerController.updateDeliveryPartner);
router.delete("/delete/:id", deliveryPartnerController.deleteDeliveryPartner);

export default router;
