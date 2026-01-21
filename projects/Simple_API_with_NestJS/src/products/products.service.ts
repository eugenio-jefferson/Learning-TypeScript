import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    createProduct(product: Product) {
        const newProduct = new Product(product.name, product.description, product.price);
        this.products.push(newProduct);
        
        return newProduct;
    }

    getAllProducts() {
        return this.products;
    }
}
