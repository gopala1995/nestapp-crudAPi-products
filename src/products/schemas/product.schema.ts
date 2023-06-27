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
  published: string;

  @Prop()
  image: string;

  @Prop()
  Price: string;

  @Prop()
  rating: string;
}

export const ProductSchem = SchemaFactory.createForClass(Product);
