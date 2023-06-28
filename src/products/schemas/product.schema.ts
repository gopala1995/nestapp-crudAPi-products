import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

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
}

export const ProductSchem = SchemaFactory.createForClass(Product);
