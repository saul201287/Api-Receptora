import { Payment } from "../domain/Payment";
import { PaymesRepository } from "../domain/PaymentsRepository";
import amqp from "amqplib";

export class ResponseQueueRepository implements PaymesRepository {
  async noticationPayment(pay: Payment): Promise<Payment | null> {
    const options = {
      username: process.env.AMQP_USERNAME,
      password: process.env.AMQP_PASSWORD,
    };
    const url: string | any = process.env.AMQP_URL;
   try {
    const conn = await amqp.connect(url, options);
    const ch = await conn.createChannel();
    const status = ch.publish(
      "upchiapas.exc",
      "spe32",
      Buffer.from(JSON.stringify(pay))
    );
    if (status) {
      return pay;
    } else {
      return null;
    }
   } catch (error) {
    console.log(error);
    
    return null;
   }
  }
}
