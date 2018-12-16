import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http'
import { Book } from "./book.model";
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    private books: Map<number, Book>;

    constructor(private http: Http, private authService: AuthService) {
        this.books = new Map<number, Book>();
    }

    getBooks() {
        const headers = new Headers({ "x-access-token": this.authService.getToken() });
        return this.http.get('http://localhost:8080/api/book/', { headers: headers });
    }

    addBook(book: Book) {
        this.books.set(book.isbn, book);
    }

    getBook(isbn: number) {
        return this.books.get(isbn);
    }
}