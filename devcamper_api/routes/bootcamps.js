const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send("<h1>Hello from Express</h1>");
  // res.json({ name: "Blaise" });
  // res.sendStatus(400)
  // res.status(400).json({ success: false });
  // res.status(200).json({ success: true, data: [{ id: 1 }, { id: 2 }] });
  res.status(200).json({ success: true, message: "Show all bootcamps" });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Show bootcamp ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, message: "Create new bootcamp" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Update bootcamp ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;
