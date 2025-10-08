import bcrypt from 'bcryptjs';
import User from "../models/user.model";
import { IUser } from '../interface/user.interface';
import sendResponse from '../utils/send.response';
import catchAsyncError from '../utils/catchAsync';
import AppError from '../errors/AppError';



// Create a new user
export const createUser = catchAsyncError(async (req, res) => {
  const userData = req.body as IUser;

    const { name, email, password, phone, address } = userData;
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return sendResponse(res, {
        statusCode: 400,
        success: false,
        message: "User with this email or phone already exists."
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });

    await user.save();
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "User created successfully",
      data: user,
    }); 
  
});


// Get all users
const getUsers = catchAsyncError(async (req, res) => {

    const users = await User.find().populate("subscriptions");  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Users retrieved successfully",
      data: users,
    });
});


// Get single user by ID
const getUserById = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate("subscriptions");

    if (!user) {
      throw new AppError(404, "User not found");
    }

      sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User found successfully",
      data: user,
    });
});


// Update user
const updateUser = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedUser) {
      throw new AppError(404, "User not found");
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
});


// Delete user
const deleteUser = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
        throw new AppError(404, "User not found");
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
});

const userController = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};

export default userController;
