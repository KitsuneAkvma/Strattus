import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const Schema = mongoose.Schema;

export const user = new Schema({
  password: {
    type: String,
    minlength: 6,
    maxLength: 128,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    minlength: 3,
    maxLength: 320,
    required: [true, "Email is required"],
    unique: true,
  },
  username: { type: String, minlength: 3, maxLength: 64, required: true },
  token: { type: String, default: "" },
  isVerified: { type: Boolean, default: false },
  verificationToken: {
    type: String,
    required: [validationOfVerificationToken, "Verify token is required"],
    default: "",
  },
  savedLocations: { type: Array, default: [] },
  accountType: { type: String, enum: ["user", "admin"], default: "user" },
});
user.methods.setPassword = function (password) {
  this.password = bcryptjs.hashSync(password, bcryptjs.genSaltSync(6));
};
user.methods.validPassword = function (password) {
  return bcryptjs.compareSync(password, this.password);
};
export const User = mongoose.model("user", user);
function validationOfVerificationToken() {
  if (User.verify === false) return typeof User.verificationToken === "string";
  return User.verificationToken === null;
}
