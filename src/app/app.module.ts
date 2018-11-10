import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BooksComponent } from './books-list/books-list.component';
import { BookComponent } from './books-list/book-item/book-item.component';
import { BookDetailComponent } from './books-list/book-detail/book-detail.component';
import { BooksService } from './books-list/books.service';
import { HttpModule } from '@angular/http';
import { FaqComponent } from './faq/faq.component';

const appRouts: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BooksComponent,
    BookComponent,
    BookDetailComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
