import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PaymentService } from 'src/domain/payment/payment.service';
import { PaymentDto } from '../dto/payment.dto';

@Controller()
export class PaymentController {
  constructor(private readonly userService: PaymentService) {}

  @MessagePattern('create_payment')
  handleCreateUser(paymentData: PaymentDto) {
    return this.userService.handleUserCreate(paymentData);
  }
}
