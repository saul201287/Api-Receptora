export class Payment {
    constructor(
      readonly idPay: number,
      readonly product: string,
      readonly date: Date,
      readonly price: number
    ) {}
  }