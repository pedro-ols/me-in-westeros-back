import express from "express";
import { config } from "dotenv";
import cors from "cors"; 

import routes from "./routes/index.routes.js";

config(); //
const port = process.env.PORT || 400;

const app = express();
app.use(cors());

app.use(express.json());

app.use("/me-in-westeros", routes);

app.listen(port, () => {
  console.log(`🐺Winter is coming ${port}🐺`);
});
