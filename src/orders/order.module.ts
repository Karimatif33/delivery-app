import { Module } from '@nestjs/common';
import { OrderController } from './orders,controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './order.model';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
  ],
  controllers: [OrderController],
  providers: [OrdersService],
})
export class OrdersModule {}
