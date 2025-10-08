import express from "express";
import {
  createSubscription,
  getAllSubscriptions,
  getSingleSubscription,
  updateSubscription,
  deleteSubscription,
} from "../controller/SubscriptionController";

const router = express.Router();

router.post("/", createSubscription);
router.get("/", getAllSubscriptions);
router.get("/:id", getSingleSubscription);
router.patch("/:id", updateSubscription);
router.delete("/:id", deleteSubscription);

export default router;
