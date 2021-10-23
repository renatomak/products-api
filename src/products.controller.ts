import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('LIV01', "Livro TDD E BDD na prática", 29.90),
    new Product('LIV02', "Iniciando com Fluter", 39.90),
    new Product('LIV03', "Inteligencia artificial", 29.90),
  ];
  
  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  getById(@Param() params): Product {
    return this.products[0];
  }

  @Post()
  create(@Body() product: Product) {
    product.id = 100;
    this.products.push(product);
  }

  @Put()
  update(@Body() product: Product): Product {
    return product;
  }

  @Delete(':id')
  exclude(@Param() params) {
    return this.products.pop();
  }
}
