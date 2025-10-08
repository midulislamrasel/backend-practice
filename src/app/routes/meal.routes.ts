import express from "express";
import mealController from "../controller/meal.controller";




const router = express.Router();

router.post("/", mealController.createMeal);
router.get("/", mealController.getMeals);
router.get("/:id", mealController.getMealById);
router.put("/:id", mealController.updateMeal);
router.delete("/:id", mealController.deleteMeal);

export default router;
