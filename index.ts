const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const port = process.env.PORT || 5000;
const querystring = require("querystring");
const path = require("path");
import { Request, Response, NextFunction } from "express";

const app = express();
require("dotenv").config();
app.use(cors()); //TODO disable in prod
app.get("*", (req: Request, res: Response) => {
  res.send("ok");
});

const http = require("http").Server(app);

http.listen(port, () => console.log(`http server Listening on port ${port}`));
