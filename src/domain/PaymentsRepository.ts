import { Payment } from "./Payment";
export interface PaymesRepository {
  noticationPayment(pay: Payment): Promise<Payment | null>;
}
