import { Schema, Types, model } from 'mongoose';

const customerSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true, lowercase: true },
    lastName: { type: String, required: true, trim: true, lowercase: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    address: {
      street: { type: String },
      number: { type: String },
    },
    postal: {
      code: { type: String },
      region: { type: String },
    },
    phone: { type: String },
    password: { type: String, required: true },
    orders: [{ type: Types.ObjectId, ref: 'Order' }],
  },
  {
    id: true,
    timestamps: true,
    versionKey: false,
  }
);

export const Customer = model('Customer', customerSchema);
