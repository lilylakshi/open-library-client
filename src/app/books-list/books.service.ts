import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http'
import { Book } from "./book.model";
import { AuthService } from "../auth.service";
import { AlertService } from "../_services/alert.service";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    private books: Map<number, Book>;
    private subject: Subject<Book[]>;

    constructor(private http: Http, 
        private authService: AuthService, 
        private alertService: AlertService,
        private router: Router) {
        this.books = new Map<number, Book>();
        this.subject = new Subject<Book[]>();
    }

    reloadBooks() {
        const headers = new Headers({ "x-access-token": this.authService.getToken() });
         
        this.http.get('http://localhost:8080/api/book/', { headers: headers }).
        subscribe(
            (res: Response) => {
              const data = res.json();
              const newBooks = [];
              for(const bookJson of data) {
                const book = new Book(
                  bookJson.isbn,
                  bookJson.title,
                  bookJson.author,
                  bookJson.quantity
                );
                book.desc = bookJson.description;
                book.frontCover = bookJson.frontCover;
                book.backCover = bookJson.backCover;
                book.lang = bookJson.language;
                newBooks.push(book);
              }
              this.addNewBooks(newBooks);
            }, 
            (err) => console.log(err)
          );
    }

    addNewBooks(books: Book[]) {
        books.forEach((book: Book) => this.books.set(book.isbn, book));
        this.subject.next(books);
    }

    getBook(isbn: number) {
        return this.books.get(isbn);
    }

    getBooksSubject() {
        return this.subject.asObservable();
    }

    createBook(book: Book) {
        const headers = new Headers({ "x-access-token": this.authService.getToken() });

        const reqBody = {
            isbn: book.isbn,
            title: book.title,
            description: book.desc,
            author: book.author,
            quantity: book.quantity,
            frontCover: book.frontCover,
            backCover: book.backCover,
            language: book.lang
        }

        this.http.post('http://localhost:8080/api/book', reqBody, { headers: headers }).subscribe(
        (res) => {
            this.alertService.success("Book created!");
            this.reloadBooks();
            this.router.navigate(['']);
        },
        (err) => {
            this.alertService.error("Error occurred while creating the book");
            console.log(err);
        });
    }
}