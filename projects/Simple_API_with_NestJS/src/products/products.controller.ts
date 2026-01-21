import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    createProduct(@Body() product: Product) {
        const newProduct = this.productsService.createProduct(product);
        
        return {
            message: 'Product created successfully',
            product: newProduct
        }
    }

    @Get()
    getAllProducts() {
        const products: Product[] = this.productsService.getAllProducts();
        
        return {
            products
        }
    }
}
