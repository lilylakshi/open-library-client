import { Injectable } from "@angular/core";
import { Http } from '@angular/http'
import { Book } from "./book.model";

@Injectable()
export class BooksService {

    private books: Map<number, Book>;

    constructor(private http: Http) {
        this.books = new Map<number, Book>();
    }

    getBooks() {
        return this.http.get('http://localhost:8080/api/book/');
    }

    addBook(book: Book) {
        this.books.set(book.isbn, book);
    }

    getBook(isbn: number) {
        return this.books.get(isbn);
    }
}