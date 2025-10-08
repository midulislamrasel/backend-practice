import { Request, Response, NextFunction } from "express";
import sendResponse from "../utils/send.response";
import Subscription from "../models/subscription.model";


// ✅ Create a new subscription
export const createSubscription = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subscription = await Subscription.create(req.body);
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: "Subscription created successfully",
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
};

// ✅ Get all subscriptions
export const getAllSubscriptions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subscriptions = await Subscription.find()
      .populate("user", "name email")
      .populate("plan", "name price")
      .populate("deliveries");

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Subscriptions retrieved successfully",
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};

// ✅ Get single subscription by ID
export const getSingleSubscription = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const subscription = await Subscription.findById(id)
      .populate("user", "name email")
      .populate("plan", "name price")
      .populate("deliveries");

    if (!subscription) {
      return sendResponse(res, {
        success: false,
        statusCode: 404,
        message: "Subscription not found",
        data: null,
      });
    }

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Subscription retrieved successfully",
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
};

// ✅ Update a subscription
export const updateSubscription = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedSubscription = await Subscription.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedSubscription) {
      return sendResponse(res, {
        success: false,
        statusCode: 404,
        message: "Subscription not found",
        data: null,
      });
    }

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Subscription updated successfully",
      data: updatedSubscription,
    });
  } catch (error) {
    next(error);
  }
};

// ✅ Delete a subscription
export const deleteSubscription = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedSubscription = await Subscription.findByIdAndDelete(id);

    if (!deletedSubscription) {
      return sendResponse(res, {
        success: false,
        statusCode: 404,
        message: "Subscription not found",
        data: null,
      });
    }

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Subscription deleted successfully",
      data: deletedSubscription,
    });
  } catch (error) {
    next(error);
  }
};
