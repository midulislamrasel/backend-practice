import Plan from "../models/plan.model";
import { Request, Response } from "express";


// Create a new plan
export const createPlan = async (req: Request, res: Response) => {
  try {
    const { name, durationWeeks, pricePerWeek, meals } = req.body;

    const newPlan = new Plan({
      name,
      durationWeeks,
      pricePerWeek,
      meals,
    });

    await newPlan.save();
    res.status(201).json(newPlan);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get all Plans
export const getPlans = async (_req: Request, res: Response) => {
  try {
    const plans = await Plan.find(); //.populate("meals");
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

//  Get Plan by ID
export const getPlanById = async (req: Request, res: Response) => {
  try {
    const plan = await Plan.findById(req.params.id).populate("meals");

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ✅ Update Plan
export const updatePlan = async (req: Request, res: Response) => {
  try {
    const updatedPlan = await Plan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedPlan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.status(200).json(updatedPlan);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ✅ Delete Plan
export const deletePlan = async (req: Request, res: Response) => {
  try {
    const deletedPlan = await Plan.findByIdAndDelete(req.params.id);

    if (!deletedPlan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.status(200).json({ message: "Plan deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
