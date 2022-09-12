const generateOTPForPhoneNumber = (req, res, next) => {
  try {
    if (!req.body.OTP) {
      let max = 999999;
      let min = 100000;
      const OTP = Math.floor(Math.random() * (max - min + 1) + min);
      req.body.OTP = OTP;
    }
  } catch (error) {
    console.log("OTP Generation error");
    console.log(error);
  }
  next();
};

const sendOtpToClient = (req, res) => {
  try {
    const phone = req.body.phone;
    const username = req.body.username;
    const email = req.body.email;
    const otp = req.body.OTP;
    // const message = req.body.message;
    const response = {
      phone: phone,
      username: username,
      email: email,
      OTP: otp,
    };
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};

export { generateOTPForPhoneNumber, sendOtpToClient };
