import { Schema, Types, model } from 'mongoose';
import { Order as OrderType } from '../types/order';

const orderSchema = new Schema<OrderType>(
  {
    customer: { type: Types.ObjectId, ref: 'User' },
    date: { type: String, required: true },
    status: {
      order: { type: String },
      payment: { type: String },
      delivery: { type: String },
    },
    files: [{ type: String }],
  },
  {
    id: true,
    timestamps: true,
    versionKey: false,
  }
);

export const Order = model<OrderType>('Order', orderSchema);
