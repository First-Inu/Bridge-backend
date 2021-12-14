import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import path from 'path';

var app = express();

const cors = require('cors')

const corsOptions = {
  origin: 'https://radiant-mesa-89844.herokuapp.com',
  optionSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Content-Type, access-control-allow-origin, x-api-applicationid, authorization, X-Requested-With, access-control-allow-methods, access-control-allow-headers"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "OPITIONS, GET, PUT, PATCH, POST, DELETE"
  );
  next();
});

var dir = path.join(__dirname, '../public/assets/images/emedical_card');

app.use("/emedical_card_images", express.static(dir));

app.use("/api", routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  if (req.app.get("env") === "development") console.log(err.message);
});

module.exports = app;
