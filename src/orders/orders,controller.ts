import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('api')
export class OrderController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('youDeliverThis')
  async addOrder(
    @Body('customerName') prodName: string,
    @Body('items_to_shipped') prodItem: string,
    @Body('pickupLocation') prodPic: string,
    @Body('deliveryLocation') prodDel: string,
    @Body('status') prodStu: string,
  ) {
    const genratedId = await this.ordersService.insertOrder(
      prodName,
      prodItem,
      prodPic,
      prodDel,
      prodStu,
    );
    return { id: genratedId };
  }
// ///////////
  @Get()
  async getAllOrders() {
   const orders = await this.ordersService.getOrders();
   return orders
  }
// ///////////
  @Get(':id')
  getOrder(@Param('id') prodId: string) {
    return this.ordersService.getSingleOrder(prodId);
  }
// ///////////
  @Patch(':id')
  async updateOrder(
    @Param('id') prodId: string,
    @Body('customerName') prodName: string,
    @Body('items_to_shipped') prodItem: string,
    @Body('pickupLocation') prodPic: string,
    @Body('deliveryLocation') prodDel: string,
    @Body('status') prodStu: string,
  ) {
   await this.ordersService.updateOrder(prodId, prodName, prodItem, prodPic, prodDel, prodStu )
    return null
}
// ///////////
@Delete(':id')
removeOrder(@Param('id') prodId: string) {
    this.ordersService.deleteOrder(prodId)
    return null

}
}
