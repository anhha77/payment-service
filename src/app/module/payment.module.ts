import { Module } from '@nestjs/common';
import { PaymentController } from '../controller/payment.controller';
import { PaymentService } from 'src/domain/payment/payment.service';

@Module({
  imports: [],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
