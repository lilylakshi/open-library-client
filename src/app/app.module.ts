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
import { RegisterComponent } from './auth/register/register.component';
import { SigninComponent } from './auth/signin/signin.component';

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
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BooksComponent,
    BookComponent,
    BookDetailComponent,
    FaqComponent,
    RegisterComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
