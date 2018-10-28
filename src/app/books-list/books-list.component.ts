import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    new Book(5, 'Death Masks', 'Jim Butcher')
  ];

  constructor() { }

  ngOnInit() {
  }

}
