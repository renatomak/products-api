import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'List all products';
  }

  @Get(':id')
  getById(@Param() params): string {
    return `return user ${params.id} `;
  }

  @Post()
  create(@Body() product): string {
    return `Product created ${product}`;
  }
}
