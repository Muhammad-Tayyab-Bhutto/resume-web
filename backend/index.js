import express, { json, urlencoded } from "express";
import errorHandler from "./src/middleware/errorHandler.js";
import bodyParser from "body-parser";
import cors from "cors";

import routes from "./src/routes/index.js";
import { connectMongo } from "./src/config/mongo.js";
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectMongo();

app.use("/", routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port : ${port} Env: ${env}`);
});