import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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

  @Put()
  update(@Body() product): string {
    return `Product update ${product}`;
  }

  @Delete(':id')
  exclude(@Param() params): string {
    return `Delete product ${params.id}`;
  }
}
