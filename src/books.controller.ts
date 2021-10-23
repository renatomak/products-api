import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './books.model';
import { booksService } from './books.service';

@Controller('books')
export class booksController {
  constructor(private booksService: booksService){

  }
  
  @Get()
  getAll(): Product[] {
    return this.booksService.getAll();
  }

  @Get(':id')
  getById(@Param() params): Product {
    return this.booksService.getById(params.id);
  }

  @Post()
  create(@Body() product: Product) {
    product.id = 100;
    this.booksService.create(product);
  }

  @Put()
  update(@Body() product: Product): Product {
    return this.booksService.update(product);
  }

  @Delete(':id')
  exclude(@Param() params) {
    return this.booksService.exclud(params.id);
  }
}
