import { Payment } from "../domain/Payment";
import { PaymesRepository } from "../domain/PaymentsRepository";

export class NotificationPaymentUseCase {
  constructor(
    readonly pyment: PaymesRepository
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
     
      return payN;
    } catch (error) {
      return null;
    }
  }
}
