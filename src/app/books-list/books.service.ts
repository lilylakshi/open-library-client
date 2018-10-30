import { Injectable } from "@angular/core";
import { Http } from '@angular/http'
import { Book } from "./book.model";

@Injectable()
export class BooksService {
    constructor(private http: Http) {
    }

    getBooks() {
        return this.http.get('http://localhost:8080/api/book/');
    }
}