import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "node:path";

dotenv.config();

export const App = express();
const formatsLogger = App.get("env") === "development" ? "dev" : "short";

App.use(morgan(formatsLogger));
App.use(cors());
App.use(express.json());
App.use(express.static(path.join(process.cwd(), "public")));

// Routes

App.use((req, res) => {
  res.status(404).json({ code: 404, message: "Route not found" });
});
App.use((err, req, res, next) => {
  res
    .status(500)
    .json({ code: 500, message: "Internal Server Error", error: err.message });
});
