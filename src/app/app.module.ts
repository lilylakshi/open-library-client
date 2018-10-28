import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BooksComponent } from './books-list/books-list.component';
import { BookComponent } from './books-list/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BooksComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
