import * as dotenv from "dotenv";
import mongoose from "mongoose";
import colors from "colors";
import process from "node:process";

import { App } from "./App.js";

dotenv.config();

const uriDB = process.env.MONGODB_URI;

if (uriDB) {
  const connection = mongoose.connect(uriDB);
  const PORT = process.env.PORT || 8080;
  connection
    .then(() => {
      console.info(colors.cyan("[DATABASE] Connecting to database . . ."));
      App.listen(PORT, () => {
        console.info(
          colors.green("[DATABASE] MongoDB connected successfully✅")
        );
        console.info(colors.cyan(`[DATABASE] Server running on port ${PORT}`));
      });
    })
    .catch((error) => {
      console.error(colors.red("[DATABASE] Error connecting to MongoDB:"));
      console.error(colors.red(error));
    });
} else {
  console.warn(
    colors.yellow(
      "[DATABASE] MongoDB URI is not defined in the environment variables."
    )
  );
}

process.on("SIGINT", () => {
  mongoose.disconnect();
  console.log(colors.magenta("[DATABASE] Database disconnected"));
});
