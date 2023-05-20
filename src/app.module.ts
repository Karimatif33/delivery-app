import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/order.module';

@Module({
  imports: [OrdersModule, MongooseModule.forRoot('mongodb+srv://karimatif:123456**@cluster0.ueydh3p.mongodb.net/delivery-app-db')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
