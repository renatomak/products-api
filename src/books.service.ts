
import { Injectable } from "@nestjs/common";
import { Book } from "./books.model";

@Injectable()
export class booksService {
    constructor(
        @InjectModel(Book)
        private bookModel: typeof Book
    ){}

    async getAll(): Promise<Book[]> {
        return this.bookModel.findAll();
    }

    async getById(id: number):  Promise<Book> {
        return this.bookModel.findByPk(id);
    }

    async create(book: Book) {
        this.bookModel.create(book);
    }

    async update(book: Book):  Promise<[number, Book[]]> {
        return this.bookModel.update(book,
            {
                where: {
                    id: book.id
                }
            })
    }

    async exclud(id: number) {
        const book: Book = await this.getById(id);
        this.bookModel.destroy();
    }
}