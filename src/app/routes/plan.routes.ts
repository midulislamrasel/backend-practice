import express from "express";
import planController from "../controller/plan.controller";


const router = express.Router();

router.post("/", planController.createPlan);
router.get("/", planController.getPlans);
router.get("/:id", planController.getPlanById);
router.put("/:id", planController.updatePlan);
router.delete("/:id", planController.deletePlan);

export default router;
