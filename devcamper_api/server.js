const express = require("express");
const logger = require("./middleware/logger");
const dotenv = require("dotenv");

// Route files
const bootcamps = require("./routes/bootcamps");

// Load env variables
dotenv.config({ path: "./config/config.env" });

const app = express();

// Middleware - Adding custome middleware
app.use(logger);

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// app.get("/", (req, res) => {
//   // res.send("<h1>Hello from express</h1>");
//   // res.json({name: "Blaise"});
//   // res.sendStatus(400);
//   // res.status(400).json({success:false});
//   // res.status(200).json({success:true, data:[{id:1,name:"Brad"},{id:2,name:"Blaise"}]});
// })
