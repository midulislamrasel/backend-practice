import express from "express";
import {
  createMeal,
  getMeals,
  getMealById,
  updateMeal,
  deleteMeal
} from "../controller/MealController";

const router = express.Router();

router.post("/", createMeal);
router.get("/", getMeals);
router.get("/:id", getMealById);
router.put("/:id", updateMeal);
router.delete("/:id", deleteMeal);

export default router;
