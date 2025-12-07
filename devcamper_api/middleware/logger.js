const logger = (req, res, next) => {
  req.hello = "Hello World!";
  console.log("Middleware ran");
  next();
};

const urlStuff = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

(module.exports = logger), urlStuff;
