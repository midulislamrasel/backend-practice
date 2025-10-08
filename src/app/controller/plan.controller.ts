import Plan from "../models/plan.model";
import catchAsyncError from "../utils/catchAsync";
import AppError from "../errors/AppError";
import sendResponse from "../utils/send.response";


// Create a new plan
const createPlan = catchAsyncError(async (req, res) => {
  const { name, durationWeeks, pricePerWeek, meals } = req.body;

    const newPlan = new Plan({
      name,
      durationWeeks,
      pricePerWeek,
      meals,
    });

    await newPlan.save();
    sendResponse(res, {
        statusCode: 201,
        success: true,
        data: newPlan,
        message: "Plan created successfully",
    }); 
});


// Get all Plans
const getPlans = catchAsyncError(async (_req, res) => {
    const plans = await Plan.find().populate("meals");
    sendResponse(res, {
        statusCode: 200,
        success: true,
        data: plans,
        message: "Plans retrieved successfully",
    });
});

//  Get Plan by ID
const getPlanById = catchAsyncError(async (req, res) => {
  const plan = await Plan.findById(req.params.id).populate("meals");

  if (!plan) {
    throw new AppError(404, "Plan not found");
  }

  sendResponse(res, {
      statusCode: 200,
      success: true,
      data: plan,
      message: "Plan retrieved successfully",
  });

});

// Update Plan
const updatePlan = catchAsyncError(async (req, res) => {
  const updatedPlan = await Plan.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    });

    if (!updatedPlan) {
      return res.status(404).json({ message: "Plan not found" });
    }

   sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Plan updated successfully",
      data: updatedPlan,
    });
  
});

// Delete Plan
const deletePlan = catchAsyncError(async (req, res) => {
  const deletedPlan = await Plan.findByIdAndDelete(req.params.id);

  if (!deletedPlan) {
    throw new AppError(404, "Plan not found");
  }

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Plan deleted successfully",
      data: deletedPlan,
    }); 
});

const planController = {
  createPlan,
  getPlans,
  getPlanById,
  updatePlan,
  deletePlan
};

export default planController;