import { Payment } from "../domain/Payment";
import { PaymesRepository } from "../domain/PaymentsRepository";
import { INotificationService } from "./services/INotificationService";

export class NotificationPaymentUseCase {
  constructor(
    readonly pyment: PaymesRepository,
    readonly paymes: INotificationService
  ) {}

  async run(
    idPay: number,
    product: string,
    date: Date,
    price: number
  ): Promise<Payment | null> {
    const pay = new Payment(idPay, product, date, price);
    try {
      const payN = await this.pyment.noticationPayment(pay);
      await this.paymes.sendMessage(pay);
      return payN;
    } catch (error) {
      return null;
    }
  }
}
