import express from "express";
import morgan from "morgan";
import { Signale } from "signale";
import * as dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors"
import { paymentRouter } from "./payments/infrastructure/PaymentsRouter";

const app = express();

app.use(helmet.hidePoweredBy());
dotenv.config();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/payment", paymentRouter)
const options = {
  secrets: ["([0-9]{4}-?)+"],
};

const logger = new Signale(options);

const port: string | undefined = process.env.PORT;

app.listen(port, () => {
  logger.success("server listening on port:", port);
});

