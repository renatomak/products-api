import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { booksController } from './books.controller';
import { booksService } from './books.service';

@Module({
  imports: [],
  controllers: [AppController, booksController],
  providers: [AppService, booksService],
})
export class AppModule {}
