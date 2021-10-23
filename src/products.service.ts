import { Product } from "./product.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {
    products: Product[] = [
        new Product('LIV01', "Livro TDD E BDD na prática", 29.90),
        new Product('LIV02', "Iniciando com Fluter", 39.90),
        new Product('LIV03', "Inteligencia artificial", 29.90),
    ];

    getAll(): Product[] {
        return this.products;
    }

    getById(id: number): Product {
        return this.products[0];
    }

    create(product: Product) {
        this.products.push(product);
    }

    update(product: Product): Product {
        return product;
    }

    exclud(id: number) {
        this.products.pop();
    }
}