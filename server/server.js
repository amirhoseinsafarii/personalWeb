import express from "express";
import cors from "cors";

import mongoose from "mongoose";

const morgan = require("morgan");
require("dotenv").config();

// create express app
const app = express();

// db
// mongoose
//   .connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then(() => console.log("**DB CONNECTED**"))
//   .catch((err) => console.log("DB CONNECTION ERR => ", err));

// apply middlewares
app.use(cors());
app.use(express.json({ limit: "5mb" }));

app.use(morgan("dev"));

// port
const port = 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
