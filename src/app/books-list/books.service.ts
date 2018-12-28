import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http'
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

    getBooks(callback: Function) {
        const headers = new Headers({ "x-access-token": this.authService.getToken() });
         
        this.http.get('http://localhost:8080/api/book/', { headers: headers }).
        subscribe(
            (res: Response) => {
              const data = res.json();
              for(const bookJson of data) {
                const book = new Book(
                  bookJson.isbn,
                  bookJson.title,
                  bookJson.author,
                  bookJson.quantity
                );
                book.desc = bookJson.desc;
                book.frontCover = bookJson.frontCover;
                book.backCover = bookJson.backCover;
                book.lang = bookJson.lang;
                callback(book);
                this.addBook(book);
              }
            }, 
            (err) => console.log(err)
          );
    }

    addBook(book: Book) {
        this.books.set(book.isbn, book);
    }

    getBook(isbn: number) {
        return this.books.get(isbn);
    }

    createBook(book: Book) {
        const headers = new Headers({ "x-access-token": this.authService.getToken() });

        this.http.post('http://localhost:8080/api/book', book, { headers: headers }).subscribe(
        (res) => {
            console.log("Book creation successful!");
            console.log(res);
        },
        (err) => {
            console.log("Book creation failed");
            console.log(err);
        });
    }
}