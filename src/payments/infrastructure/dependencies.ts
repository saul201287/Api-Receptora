import { NotificationPaymentUseCase } from "../app/NotifiationPaymentsUseCase";
import { NotificationQueueController } from "./controllers/NotificationQueueController";
import { ResponseQueueRepository } from "./ResponseQueueRepository";
import { ServicesNotification } from "./ServicesNotification/ServicesNotification";


const responseQueue = new ResponseQueueRepository(); 
const servicesNotification = new ServicesNotification();

const noticationPaymentsUseCase = new NotificationPaymentUseCase(responseQueue, servicesNotification);

export const notificationQueueController = new NotificationQueueController(noticationPaymentsUseCase);  