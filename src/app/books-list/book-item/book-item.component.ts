import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Book } from "../book.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-book',
    templateUrl: './book-item.component.html',
    styleUrls: ['./book-item.component.css']
})
export class BookComponent {
    @Input() book: Book;

    constructor(private router: Router) {
    }

    @Output() onBookClicked = new EventEmitter<Book>();

    bookClicked() {
        this.onBookClicked.emit(this.book);
        this.router.navigate(['books', this.book.isbn]);
    }
}