import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../auth/schemas/user.schema';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Product {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  published: boolean;

  @Prop()
  image: string;

  @Prop()
  price: number;

  @Prop()
  rating: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const ProductSchem = SchemaFactory.createForClass(Product);
