import { Payment } from "../../domain/Payment";
export interface INotificationService {
    sendMessage(payload: Payment):string;
}