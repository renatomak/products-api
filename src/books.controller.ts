import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './books.model';
import { booksService } from './books.service';

@Controller('books')
export class booksController {
  constructor(private booksService: booksService){

  }
  
  @Get()
  async getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  async getById(@Param() params): Promise<Book> {
    return this.booksService.getById(params.id);
  }

  @Post()
  async create(@Body() book: Book) {
    book.id = 100;
    this.booksService.create(book);
  }

  @Put()
  async update(@Body() book: Book): Promise<[number, Book[]]> {
    return this.booksService.update(book);
  }

  @Delete(':id')
  async exclude(@Param() params) {
    return this.booksService.exclud(params.id);
  }
}
