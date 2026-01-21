export class Product {
    id: string;
    name: string;
    description: string;
    price: number;

    constructor(name: string, description: string, price: number) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.price = price;
    }
}