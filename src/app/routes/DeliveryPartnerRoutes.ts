import express from "express";
import {
  createDeliveryPartner,
  getDeliveryPartners,
  getDeliveryPartnerById,
  updateDeliveryPartner,
  deleteDeliveryPartner
} from "../controller/DeliveryPartnerController";

const router = express.Router();

router.post("/", createDeliveryPartner);
router.get("/", getDeliveryPartners);
router.get("/:id", getDeliveryPartnerById);
router.put("/:id", updateDeliveryPartner);
router.delete("/:id", deleteDeliveryPartner);

export default router;
