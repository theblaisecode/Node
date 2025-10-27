const express = require("express");
const dotenv = require("dotenv");

// Route Files
const bootcamps = require("./routes/bootcamps");

// Load env variables
dotenv.config({ path: "./config/config.env" });

const app = express();

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

// app.get("/api/v1/bootcamps", (req, res) => {
//   // res.send("<h1>Hello from Express</h1>");
//   // res.json({ name: "Blaise" });
//   // res.sendStatus(400)
//   // res.status(400).json({ success: false });
//   // res.status(200).json({ success: true, data: [{ id: 1 }, { id: 2 }] });
//   res.status(200).json({ success: true, message: "Show all bootcamps" });
// });

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
