import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: mongoose.Model<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    const product = await this.productModel.find();
    return product;
  }

  async createProduct(product: Product): Promise<Product> {
    const res = await this.productModel.create(product);
    return res;
  }
}
