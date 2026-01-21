import { Module } from '@nestjs/common';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
