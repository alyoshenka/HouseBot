const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const Notification = require("./models/Notification");

router.get("/", async (req, res) => {
  const notifs = await Notification.find();
  const filter = notifs.map((notif) => {
    return { date: notif.date, message: notif.notif };
  });
  res.send(filter);
});

router.post("/", async (req, res) => {
  const sendDate = req.body.date;
  const notifBody = req.body.notif;

  const errs = validationResult(req);
  if (!errs.isEmpty()) {
    return res.status(400).json({ errors: errs.array() });
  }

  if (!sendDate || !notifBody) {
    return res.status(400).send("All fields must be filled");
  }

  const notif = new Notification({
    date: sendDate,
    notif: notifBody,
  });
  console.log("Successfully created new notification id=" + notif._id);
  await notif.save();
  res.send(notif);
});

module.exports = router;
