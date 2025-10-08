import { Request, Response } from "express";
import mealModel from "../models/meal.model";

export const createMeal = async (req: Request, res: Response) => {
    try {
        const {name, type, calories, description, repeatCount } = req.body;

        const newMeal = new mealModel({
            name,
            type,
            calories,
            description,
            repeatCount
        });

        await newMeal.save();
        res.status(201).json(newMeal);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
// Get all Meals
export const getMeals = async (_req: Request, res: Response) => {
  try {
    const meals = await mealModel.find();
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get Meal by ID
export const getMealById = async (req: Request, res: Response) => {
  try {
    const meal = await mealModel.findById(req.params.id);

    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    res.status(200).json(meal);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Update Meal
export const updateMeal = async (req: Request, res: Response) => {
  try {
    const updatedMeal = await mealModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedMeal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    res.status(200).json(updatedMeal);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Delete Meal
export const deleteMeal = async (req: Request, res: Response) => {
  try {
    const deletedMeal = await mealModel.findByIdAndDelete(req.params.id);

    if (!deletedMeal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    res.status(200).json({ message: "Meal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};