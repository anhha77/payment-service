import { Injectable } from '@nestjs/common';
import { PaymentDto } from 'src/app/dto/payment.dto';

@Injectable()
export class PaymentService {
  private items: { item: string; value: number; key: string }[] = [
    {
      item: 'Book',
      value: 18,
      key: '0',
    },
    {
      item: 'Pen',
      value: 19,
      key: '1',
    },
    {
      item: 'Ruler',
      value: 20,
      key: '2',
    },
  ];

  handlePaymentCreate(paymentData: PaymentDto) {
    const item = {
      ...paymentData,
      key: `${parseInt(this.items[this.items.length - 1].key, 10) + 1}`,
    };
    this.items = [...this.items, item];
    return item;
  }
}
