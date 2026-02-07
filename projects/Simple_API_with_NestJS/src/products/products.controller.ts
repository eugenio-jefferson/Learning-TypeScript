import {
  Controller,
  Post,
  Body,
  Get,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { ApiResponse } from '../common/api-response';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createProduct(@Body() product: Product): ApiResponse<Product> {
    const newProduct = this.productsService.createProduct(product);
    return ApiResponse.success(
      newProduct,
      'Product created successfully',
      HttpStatus.CREATED,
    );
  }

  @Get()
  getAllProducts(): ApiResponse<Product[]> {
    const products = this.productsService.getAllProducts();
    return ApiResponse.success(products, 'Products retrieved successfully');
  }
}
