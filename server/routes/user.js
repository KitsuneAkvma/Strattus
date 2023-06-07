import express from "express";

export const usersRouter = express.Router();

usersRouter.get("/me"); //current user
usersRouter.patch("/ne/change-password"); //change password
usersRouter.patch("/me/change-email"); //change email
usersRouter.delete("/:id"); //delete user

usersRouter.post("/login"); //login
usersRouter.post("/login/reset-password"); //reset password
usersRouter.post("/logout"); //logout

usersRouter.post("/register"); //register

usersRouter.get("/verify/:token"); //verify email
usersRouter.get("/verify/resend/:email"); //resend verification email
