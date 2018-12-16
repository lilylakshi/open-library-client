import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private booksService: BooksService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.book = this.booksService.getBook(this.route.snapshot.params['isbn']);
  }

}
