import "dotenv/config";
import Twilio from "twilio";
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTHTOKEN;
const client = new Twilio(accountSid, authToken);

const twilioApiCall = function (body) {
  client.messages
    .create({
      body: `OTP:${body.OTP}. ${body.message}`,
      messagingServiceSid: process.env.TWILIO_MSGSERVICE_SID,
      to: body.phone,
    })
    .then((message) => console.log("twilio sent message successfully"))
    .done();
};

const sendOtpViaMessageToClientsPhone = (req, res, next) => {
  try {
    twilioApiCall(req.body);
  } catch (error) {
    console.log("Twilio Error");
    console.log(error);
  }
  next();
};

export { sendOtpViaMessageToClientsPhone };
