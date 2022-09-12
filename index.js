import "dotenv/config";
import express from "express";
import cors from "cors";
import connectToMongo from "./db.js";

connectToMongo();
const app = express();
app.use(cors()); // cross origin
app.use(express.urlencoded({ extended: true })); // request body parse
app.use(express.json());

import otpRoutes from "./routes/otp.js";

app.use("/api", otpRoutes);

const port = process.env.PORT || 8000;

app.listen(port, function () {
  console.log(`Backend Running`);
});
