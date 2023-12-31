import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Product } from './schemas/product.schema';
import { Query } from 'express-serve-static-core';
import { User } from '../auth/schemas/user.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: mongoose.Model<Product>,
  ) {}

  async findAll(query: Query): Promise<Product[]> {
    const rePerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = rePerPage * (currentPage - 1);

    const keyword = query.name
      ? {
          name: {
            $regex: query.name,
            $options: 'i',
          },
        }

      : {};

    const product = await this.productModel
      .find({ ...keyword })
      // .sort({ price: "desc", rating: 1 })
      // .limit(rePerPage)
      .skip(skip);
    return product;
  }

  async getAllPublished(published: boolean): Promise<Product[]> {
    const publish = await this.productModel.aggregate([
      { $match: { published: true } },
    ]);
    return publish;
  }

  async createProduct(product: Product, user: User): Promise<Product> {
    const data = Object.assign(product, { user: user._id });
    const res = await this.productModel.create(data);
    return res;
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productModel.findById(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async updateById(id: string, product: Product): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id);
  }
}
