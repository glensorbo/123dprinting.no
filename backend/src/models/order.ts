import { Schema, Types, model } from 'mongoose';

const orderSchema = new Schema(
  {
    customer: { type: Types.ObjectId, ref: 'User' },
    status: {
      order: { type: String },
      payment: { type: String },
      delivery: { type: String },
    },
  },
  {
    id: true,
    timestamps: true,
    versionKey: false,
  }
);

export const Order = model('Order', orderSchema);
