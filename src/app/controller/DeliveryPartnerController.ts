import { Request, Response } from "express";
import DeliveryPartner from "../models/deliverpartner.model";

// ✅ Create a new Delivery Partner
export const createDeliveryPartner = async (req: Request, res: Response) => {
  try {
    const { name, phone, deliveries } = req.body;

    const newPartner = new DeliveryPartner({
      name,
      phone,
      deliveries,
    });

    await newPartner.save();
    res.status(201).json(newPartner);
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

// Get all Delivery Partners
export const getDeliveryPartners = async (_req: Request, res: Response) => {
  try {
    const partners = await DeliveryPartner.find().populate("deliveries");
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// Get Delivery Partner by ID
export const getDeliveryPartnerById = async (req: Request, res: Response) => {
  try {
    const partner = await DeliveryPartner.findById(req.params.id).populate("deliveries");

    if (!partner) {
      return res.status(404).json({ success: false, message: "Delivery Partner not found" });
    }

    res.status(200).json(partner);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// Update Delivery Partner
export const updateDeliveryPartner = async (req: Request, res: Response) => {
  try {
    const updatedPartner = await DeliveryPartner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("deliveries");

    if (!updatedPartner) {
      return res.status(404).json({ success: false, message: "Delivery Partner not found" });
    }

    res.status(200).json(updatedPartner);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// Delete Delivery Partner
export const deleteDeliveryPartner = async (req: Request, res: Response) => {
  try {
    const deletedPartner = await DeliveryPartner.findByIdAndDelete(req.params.id);

    if (!deletedPartner) {
      return res.status(404).json({ success: false, message: "Delivery Partner not found" });
    }

    res.status(200).json({ success: true, message: "Delivery Partner deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};
