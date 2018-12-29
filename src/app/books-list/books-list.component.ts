import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BooksService } from './books.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-books',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksComponent implements OnInit {

  private books: Map<number, Book>;
  private booksArr: Book[];

  constructor(private booksService: BooksService) {
    this.books = new Map<number, Book>(); 
  }

  ngOnInit() {
    this.booksService.reloadBooks();
    this.booksService.getBooksSubject().subscribe((book: Book) => {
      this.books.set(book.isbn, book);
      this.booksArr = [];
      this.books.forEach((v) => {
        this.booksArr.push(v);
      });
    });
  }

}
