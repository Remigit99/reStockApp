import userModel from "../model/user.model.js";
import bcryptjs from "bcryptjs";

// Create User Controller

export const createUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        error: true,
        success: false,
      });
    }

    //Check for existing User
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.json({
        message: error.message || error || "User Already Exists",
        error: true,
        success: false,
      });
    }

    // Use bcryptjs to hash password

    const hashedPassword = await bcryptjs.hash(password, 10);

    const createUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const result = await createUser.save();
    res.status(201).json({});
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || error || "Error creating user",
      error: true,
      success: false,
    });
  }
};
