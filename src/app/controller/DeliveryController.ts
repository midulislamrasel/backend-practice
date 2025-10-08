import { Request, Response } from "express";
import deliveryModel from "../models/delivery.model";

// ✅ Create Delivery
export const createDelivery = async (req: Request, res: Response) => {
  try {
    const { subscription, deliveryPartner, meal, deliveryDate, status } = req.body;

    const newDelivery = new deliveryModel({
      subscription,
      deliveryPartner,
      meal,
      deliveryDate,
      status,
    });

    await newDelivery.save();
    res.status(201).json(newDelivery);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err: any) => err.message);
      return res.status(400).json({
        success: false,
        message: "Validation Error",
        errors: messages,
      });
    }
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ Get All Deliveries
export const getDeliveries = async (_req: Request, res: Response) => {
  try {
    const deliveries = await deliveryModel.find()
      .populate("subscription")
      .populate("deliveryPartner")
      .populate("meal");
    res.status(200).json(deliveries);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" , error });
  }
};

// ✅ Get Delivery by ID
export const getDeliveryById = async (req: Request, res: Response) => {
  try {
    const delivery = await deliveryModel.findById(req.params.id)
      .populate("subscription")
      .populate("deliveryPartner")
      .populate("meal");

    if (!delivery) {
      return res.status(404).json({ success: false, message: "Delivery not found" });
    }

    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// ✅ Update Delivery
export const updateDelivery = async (req: Request, res: Response) => {
  try {
    const updatedDelivery = await deliveryModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .populate("subscription")
      .populate("deliveryPartner")
      .populate("meal");

    if (!updatedDelivery) {
      return res.status(404).json({ success: false, message: "Delivery not found" });
    }

    res.status(200).json(updatedDelivery);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// ✅ Delete Delivery
export const deleteDelivery = async (req: Request, res: Response) => {
  try {
    const deletedDelivery = await deliveryModel.findByIdAndDelete(req.params.id);

    if (!deletedDelivery) {
      return res.status(404).json({ success: false, message: "Delivery not found" });
    }

    res.status(200).json({ success: true, message: "Delivery deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};
