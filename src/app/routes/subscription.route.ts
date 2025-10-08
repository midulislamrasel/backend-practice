import express from "express";
import subscriptionController from "../controller/subscription.controller";


const router = express.Router();

router.post("/", subscriptionController.createSubscription);
router.get("/", subscriptionController.getAllSubscriptions);
router.get("/:id", subscriptionController.getSingleSubscription);
router.patch("/:id", subscriptionController.updateSubscription);
router.delete("/:id", subscriptionController.deleteSubscription);

export default router;
