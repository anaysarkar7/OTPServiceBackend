import Entry from "../models/Entry.js";

const addMessageEntryToDb = async (req, res, next) => {
  try {
    if (req.body.message === undefined) {
      req.body.message = "Do not share OTP with anyone.";
    }
    let new_entry = {
      phone: req.body.phone,
      email: req.body.email,
      username: req.body.username,
      otp: req.body.OTP,
      message: req.body.message,
      createdAt: new Date(),
    };
    let entry = await Entry.findOne({ phone: req.body.phone });
    if (entry) {
      await Entry.updateOne(
        { phone: req.body.phone },
        {
          $set: new_entry,
          $currentDate: { lastModified: true },
        }
      );
    } else {
      entry = await Entry.create(new_entry);
    }
  } catch (error) {
    console.log("Adding Entry into DB error");
    console.log(error.message);
  }

  next();
};

const getAllMessageEntries = async (req, res) => {
  try {
    let entries = await Entry.find({});
    res.send(entries);
  } catch (error) {
    console.log("Getting Message list DB error");
    console.log(error.message);
  }
};

export { addMessageEntryToDb, getAllMessageEntries };
