import express from "express";
import { check, validationResult } from "express-validator";
import {
  sendOtpToClient,
  generateOTPForPhoneNumber,
} from "../controllers/otp.js";
import { sendOtpViaMessageToClientsPhone } from "../controllers/message.js";
import {
  addMessageEntryToDb,
  getAllMessageEntries,
} from "../controllers/db.js";
const router = express.Router();

router.post(
  "/getotp",
  generateOTPForPhoneNumber,
  sendOtpViaMessageToClientsPhone,
  addMessageEntryToDb,
  sendOtpToClient
);

router.get("/messages", getAllMessageEntries);

export default router;