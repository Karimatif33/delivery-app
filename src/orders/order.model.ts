import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  customerName: {type: String, required: true},
  items_to_shipped: String,
  pickupLocation: {type: String, required: true},
  deliveryLocation: {type: String, required: true},
  status: String,
});

export interface Order extends mongoose.Document {
  id: string;
  customerName: string;
  items_to_shipped: string;
  pickupLocation: string;
  deliveryLocation: string;
  status: string;
}
