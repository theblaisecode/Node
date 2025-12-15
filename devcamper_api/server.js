const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const urlStuff = require("./middleware/logger");
const morgan = require("morgan");
const connectDB = require("./config/db");
const colors = require("colors");
const errorHandler = require("./middleware/error");

// Load env variables
dotenv.config({ path: "./config/config.env" });

// Connect Database
connectDB();

// Route files
const bootcamps = require("./routes/bootcamps");

const app = express();

// Body parser
app.use(express.json());

// app.use(logger, urlStuff);

// Dev login middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("tiny"));
}

// Mount route
app.use("/api/v1/bootcamps", bootcamps);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // close server and exis process
  server.close(() => process.exit(1));
});

// app.get("/api/v1/bootcamps", (req, res) => {
//   // {} ${}
//   // res.send("<h1>Hello from express</h1>");
//   // res.json({ name: "Blaise" });
//   // res.sendStatus(400);
//   // res.status(400).json({ success: false });
//   res.status(200).json({ success: true, msg: "Get all bootcamps" });
// });
