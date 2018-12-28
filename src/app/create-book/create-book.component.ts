import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from '../books-list/books.service';
import { Book } from '../books-list/book.model';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const title = form.value.title;
    const author = form.value.author;
    const isbn = form.value.isbn;
    const quantity = form.value.quantity;
    const desc = form.value.desc;
    const frontCover = form.value.frontCover;
    const backCover = form.value.backCover;
    const lang = form.value.lang;

    const book = new Book(isbn, title, author, quantity);
    book.desc = desc;
    book.frontCover = frontCover;
    book.backCover = backCover;
    book.lang = lang;

    this.booksService.createBook(book);
  }
}
