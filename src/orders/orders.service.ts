import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './order.model';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {}

  async insertOrder(customerName: string, desc: string, pickupLocation: string, deliveryLocation: string, status: string ) {
    const newOrder = new this.orderModel({
      customerName,
      items_to_shipped: desc,
      pickupLocation,
      deliveryLocation,
      status,
    });
    const result = await newOrder.save();
    return result;
  }
  ////////////getALlOrders/////////////////
  async getOrders() {
    const orders = await this.orderModel.find().exec();
    return orders.map((prod) => ({
      id: prod.id,
      customerName: prod.customerName,
      items_to_shipped: prod.items_to_shipped,
      pickupLocation: prod.pickupLocation,
      deliveryLocation: prod.pickupLocation,
      status: prod.pickupLocation,
    }));
  }
  //////////getSingleOrder///////////////////
  async getSingleOrder(orderId: string) {
    const order = await this.findOrder(orderId);
    return {
      id: order.id,
      customerName: order.customerName,
      items_to_shipped: order.items_to_shipped,
      pickupLocation: order.pickupLocation,
      deliveryLocation: order.deliveryLocation,
      status: order.status,
    };
  }

  //////////updateOrder///////////////////
  async updateOrder(
    orderId: string,
    customerName: string,
    items_to_shipped: string,
    pickupLocation: string,
    deliveryLocation: string,
    status: string,
  ) {
    const updatedOrder = await this.findOrder(orderId);
    if (customerName) {
      updatedOrder.customerName = customerName;
    }
    if (items_to_shipped) {
      updatedOrder.items_to_shipped = items_to_shipped;
    }
    if (pickupLocation) {
      updatedOrder.pickupLocation = pickupLocation;
    }
    if (deliveryLocation) {
      updatedOrder.deliveryLocation = deliveryLocation;
    }
    if (status) {
      updatedOrder.status = status;
    }
    updatedOrder.save();
  console.log("order updated");

  }
  ///////////deleteOrder///////////////
async  deleteOrder(prodId: string) {
 const result = await this.orderModel.deleteOne({_id: prodId}).exec()
  
  if (result.deletedCount == 0) {
    console.log("Coud not find order");
  } else{
    console.log("order deleted");
  }
 
}
  // //////////////////////
  private async findOrder(id: string): Promise<Order> {
    let order;
    try {
      order = await this.orderModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Coud not find order');
    }
    if (!order) {
      throw new NotFoundException('Coud not find order');
    }
    return order;
  }
}
