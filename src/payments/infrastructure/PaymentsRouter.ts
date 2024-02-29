import express from "express";

import { notificationQueueController } from "./dependencies";

export const paymentRouter = express.Router();

paymentRouter.post(
  "/",
  notificationQueueController.run.bind(notificationQueueController)
);
