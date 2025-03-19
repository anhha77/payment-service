import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PaymentService } from 'src/domain/payment/payment.service';
import { PaymentDto } from '../dto/payment.dto';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @MessagePattern('get-payment')
  getPayments(): { item: string; value: number; key: string }[] {
    return this.paymentService.getPayments();
  }

  @MessagePattern('create-payment')
  handleCreatePayment(paymentData: PaymentDto) {
    return this.paymentService.handlePaymentCreate(paymentData);
  }
}
