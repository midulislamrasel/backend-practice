// userController.ts
import { Request, Response } from "express";

// Temporary in-memory users array
let users: { id: number; name: string; email: string }[] = [];

// Create User
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    // Simple validation
    const errors: { path: string; message: string }[] = [];
    if (!name) errors.push({ path: "name", message: "Name is required" });
    if (!email) errors.push({ path: "email", message: "Email is required" });

    if (errors.length > 0) {
      return res.status(400).json({
        status: "fail",
        message: "Validation failed",
        errorMessages: errors,
      });
    }

    // Create new user
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);

    return res.status(201).json({
      status: "success",
      data: newUser,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(error.statusCode || 500).json({
      status: "error",
      message: error.message || "Something went wrong",
      errorMessages: error.errors || [],
    });
  }
};

// Get all users
export const getUsers = async (_req: Request, res: Response) => {
  try {
    return res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(error.statusCode || 500).json({
      status: "error",
      message: error.message || "Something went wrong",
      errorMessages: error.errors || [],
    });
  }
};

// Get single user by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const user = users.find((u) => u.id === id);

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(error.statusCode || 500).json({
      status: "error",
      message: error.message || "Something went wrong",
      errorMessages: error.errors || [],
    });
  }
};
