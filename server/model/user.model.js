import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },
    email: {
      type: String,
      require: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Password is required"],
    },
    avatar: {
      type: String,
      default: "",
    },
    mobileNo: {
      type: String,
      default: "",
    },
    refresh_token: {
      type: String,
      default: "",
    },
    verify_email: {
      type: Boolean,
      default: false,
    },
    last_login_date: {
      type: Date,
      default: "",
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Suspended"],
      default: "Active",
    },
    address_details: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "address",
      },
    ],
    shopping_cart: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "chartProduct",
      },
    ],
    order_history: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "order",
      },
    ],
    forget_passord_otp: {
      type: String,
      default: null,
    },
    forget_passord_expiry: {
      type: Date,
      default: "",
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema)

export default userModel;
