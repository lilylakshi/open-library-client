import { Component, Input } from "@angular/core";
import { Book } from "../book.model";

@Component({
    selector: 'app-book',
    templateUrl: './book-item.component.html',
    styleUrls: ['./book-item.component.css']
})
export class BookComponent {
    @Input() book: Book;
}