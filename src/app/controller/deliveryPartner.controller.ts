
import DeliveryPartner from "../models/deliverpartner.model";
import catchAsyncError from "../utils/catchAsync";
import sendResponse from "../utils/send.response";

// Create a new Delivery Partner
 const createDeliveryPartner = catchAsyncError(async (req, res) => {
  const { name, phone, deliveries } = req.body;

    const newPartner = await DeliveryPartner.create({
      name,
      phone,
      deliveries,
    });

    sendResponse(res, {
      statusCode: 200,
      success: true,
      data: newPartner,
      message: "Delivery Partner created successfully",
    });
});


// Get all Delivery Partners
 const getDeliveryPartners = catchAsyncError(async (req, res) => {
  const partners = await DeliveryPartner.find(); //.populate("deliveries");

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: partners,
    message: "Delivery Partners retrieved successfully", 
  });
});


// Get Delivery Partner by ID
 const getDeliveryPartnerById = catchAsyncError(async (req, res) => {
  const partner = await DeliveryPartner.findById(req.params.id); //.populate("deliveries");

    if (!partner) {
      return res.status(404).json({ success: false, message: "Delivery Partner not found" });
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      data: partner,
      message: "Delivery Partner retrieved successfully",
    });
});

// Update Delivery Partner
 const updateDeliveryPartner = catchAsyncError(async (req, res) => {
  const updatedPartner = await DeliveryPartner.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).populate("deliveries");

  if (!updatedPartner) {
    return res.status(404).json({ success: false, message: "Delivery Partner not found" });
  }

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: updatedPartner,
    message: "Delivery Partner updated successfully",
  });
});

// Delete Delivery Partner
 const deleteDeliveryPartner = catchAsyncError(async (req, res) => {
  const deletedPartner = await DeliveryPartner.findByIdAndDelete(req.params.id);

    if (!deletedPartner) {
      return res.status(404).json({ success: false, message: "Delivery Partner not found" });
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Delivery Partner deleted successfully",
    });
});


const deliveryPartnerController = {
  createDeliveryPartner,
  getDeliveryPartners,
  getDeliveryPartnerById,
  updateDeliveryPartner,
  deleteDeliveryPartner
};

export default deliveryPartnerController;