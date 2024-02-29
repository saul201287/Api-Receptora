import io from "socket.io-client";
import { Payment } from "../../domain/Payment";
import { INotificationService } from "../../app/services/INotificationService";

export class ServicesNotification implements INotificationService {
  sendMessage(payload: Payment): string {
    const socket = io("http://localhost:3005"); 

    socket.on("connect", () => {
      console.log("Connected to server");
      socket.emit("chat message", payload);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
    return "Mensaje enviado";
  }
}
