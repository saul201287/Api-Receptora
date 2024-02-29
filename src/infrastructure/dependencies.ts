import { NotificationPaymentUseCase } from "../app/NotifiationPaymentsUseCase";
import { NotificationQueueController } from "./controllers/NotificationQueueController";
import { ResponseQueueRepository } from "./ResponseQueueRepository";


const responseQueue = new ResponseQueueRepository(); 

const noticationPaymentsUseCase = new NotificationPaymentUseCase(responseQueue);

export const notificationQueueController = new NotificationQueueController(noticationPaymentsUseCase);  