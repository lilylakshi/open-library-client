import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.book = new Book(this.route.snapshot.params['isbn'], 'NA', 'NA');
  }

}
