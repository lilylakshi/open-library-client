import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksComponent implements OnInit {

  private books: Map<number, Book>;
  private booksArr: Book[] = [];
  private searchText = '';

  constructor(private booksService: BooksService) {
    this.books = new Map<number, Book>(); 
  }

  ngOnInit() {
    this.booksService.reloadBooks();
    this.booksService.getBooksSubject().subscribe((newBooks: Book[]) => {
      newBooks.forEach((newBook: Book) => {
        this.books.set(newBook.isbn, newBook);
      });
      this.booksArr = [];

      this.books.forEach((book: Book) => {
        this.booksArr.push(book);
      });
    });
  }

  searchTextChanged(text: string) {
    this.searchText = text;
  }
}
