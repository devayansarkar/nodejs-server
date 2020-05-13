const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const appController = require("./app/api/fulfillment/controllers/appController");
const healthCheck = require("./app/api/healthcheck/controllers/healthCheckController");
const error = require("./app/api/error/controllers/errorController");
const { verify } = require("./app/authentication/requestVerifier")
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/dev", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(r => {
    console.log("Database is connected");
  })
  .catch(c => {
    console.log("Unable to connect with database" + c);
  });

app.set("port", process.env.PORT || 8080);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.json());

app.use("/api", verify, appController);
app.use("/", healthCheck);
app.use("/**", error);

app.listen(app.get("port"), function () {
  console.log("Application is running on port", app.get("port"));
});
