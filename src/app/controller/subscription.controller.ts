import sendResponse from "../utils/send.response";
import Subscription from "../models/subscription.model";
import catchAsyncError from "../utils/catchAsync";
import AppError from "../errors/AppError";


// Create a new subscription
 const createSubscription = catchAsyncError(async (req, res) => {

    const subscription = await Subscription.create(req.body);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Subscription created successfully",
      data: subscription,
    });
});


// Get all subscriptions
 const getAllSubscriptions = catchAsyncError(async (req, res) => {
    const subscriptions = await Subscription.find();
      // .populate("user", "name email")
      // .populate("plan", "name price")
      // .populate("deliveries");

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Subscriptions retrieved successfully",
      data: subscriptions,
    });
});

// Get single subscription by ID
 const getSingleSubscription = catchAsyncError(async (req, res) => {
  const { id } = req.params;
    const subscription = await Subscription.findById(id);
      // .populate("user", "name email")
      // .populate("plan", "name price")
      // .populate("deliveries");

    if (!subscription) {
      throw new AppError(404, "Subscription not found");
    }

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Subscription retrieved successfully",
      data: subscription,
    });
});

// Update a subscription
 const updateSubscription = catchAsyncError(async (req, res) => {
  const { id } = req.params;
    const updatedSubscription = await Subscription.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedSubscription) {
      throw new AppError(404, "Subscription not found");
    }

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Subscription updated successfully",
      data: updatedSubscription,
    });
});

//Delete a subscription
 const deleteSubscription = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const deletedSubscription = await Subscription.findByIdAndDelete(id);

    if (!deletedSubscription) {
      throw new AppError(404, "Subscription not found");
    }

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Subscription deleted successfully",
      data: deletedSubscription,
    });

});

const subscriptionController = {
  createSubscription,
  getAllSubscriptions,
  getSingleSubscription,
  updateSubscription,
  deleteSubscription
};

export default subscriptionController;
