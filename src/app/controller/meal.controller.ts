import mealModel from "../models/meal.model";
import catchAsyncError from "../utils/catchAsync";
import sendResponse from "../utils/send.response";
import AppError from "../errors/AppError";

const createMeal = catchAsyncError(async (req, res) => {
    const {name, type, calories, description, repeatCount } = req.body;

        const newMeal = new mealModel({
            name,
            type,
            calories,
            description,
            repeatCount
        });

        await newMeal.save();
        sendResponse(res, {
            statusCode: 201,
            success: true,
            data: newMeal,
            message: "Meal created successfully",
        });
});

// Get all Meals
const getMeals = catchAsyncError(async (_req, res) => {
    const meals = await mealModel.find();
    sendResponse(res, {
        statusCode: 200,
        success: true,
        data: meals,
        message: "Meals retrieved successfully",
    });
  });


// Get Meal by ID
const getMealById = catchAsyncError(async (req, res) => {
    const meal = await mealModel.findById(req.params.id);

    if (!meal) {
        throw new AppError(404, "Meal not found");
    }

    sendResponse(res, {
        statusCode: 200,
        success: true,
        data: meal,
        message: "Meal retrieved successfully",
    });
});

// Update Meal
const updateMeal = catchAsyncError(async (req, res) => {
  const updatedMeal = await mealModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updatedMeal) {
    throw new AppError(404, "Meal not found");
  }

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: updatedMeal,
    message: "Meal updated successfully",
  });
});

// Delete Meal
const deleteMeal = catchAsyncError(async (req, res) => {
  const deletedMeal = await mealModel.findByIdAndDelete(req.params.id);

    if (!deletedMeal) {
      return res.status(404).json({ message: "Meal not found" });
    }
    sendResponse(res, {
      statusCode: 200,
      success: true,  
      data: deletedMeal,
      message: "Meal deleted successfully",
          });
}); 



const mealController = {
    createMeal,
    getMeals,
    getMealById,
    updateMeal,
    deleteMeal
};
export default mealController;