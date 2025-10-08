import deliveryModel from "../models/delivery.model";
import catchAsyncError from "../utils/catchAsync";
import sendResponse from "../utils/send.response";
import AppError from "../errors/AppError";

// Create Delivery
const createDelivery = catchAsyncError(async (req, res) => {
  const { subscription, deliveryPartner, meal, deliveryDate, status } = req.body;

    const newDelivery = new deliveryModel({
      subscription,
      deliveryPartner,
      meal,
      deliveryDate,
      status,
    });

    await newDelivery.save();
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Delivery created successfully",
      data: newDelivery,
    });
});

// Get All Deliveries
const getDeliveries = catchAsyncError(async (req, res) => {
  const deliveries = await deliveryModel.find();
    // .populate("subscription")
    // .populate("deliveryPartner")
    // .populate("meal");
  res.status(200).json(deliveries);
});


// Get Delivery by ID
 const getDeliveryById = catchAsyncError(async (req, res) => {
  const delivery = await deliveryModel.findById(req.params.id);
      // .populate("subscription")
      // .populate("deliveryPartner")
      // .populate("meal");

    if (!delivery) {
      throw new AppError(404, "Delivery not found");
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Delivery retrieved successfully",
      data: delivery,
      });
});


//  Update Delivery
 const updateDelivery = catchAsyncError(async (req, res) => {
  const updatedDelivery = await deliveryModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
      // .populate("subscription")
      // .populate("deliveryPartner")
      // .populate("meal");

    if (!updatedDelivery) {
      throw new AppError(404, "Delivery not found");
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Delivery updated successfully",
      data: updatedDelivery,  
    });
});

// Delete Delivery
const deleteDelivery = catchAsyncError(async (req, res) => {
  const deletedDelivery = await deliveryModel.findByIdAndDelete(req.params.id);

    if (!deletedDelivery) {
     throw new AppError(404, "Delivery not found");
    }
    
    sendResponse(res, {
      statusCode: 200,
      success: true,  
      message: "Delivery deleted successfully",
      data: deletedDelivery,
    });
});

const deliveryController = {
  createDelivery,
  getDeliveries,
  getDeliveryById,
  updateDelivery,
  deleteDelivery
};  

export default deliveryController;