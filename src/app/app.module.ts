import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BooksComponent } from './books-list/books-list.component';
import { BookComponent } from './books-list/book-item/book-item.component';
import { BookDetailComponent } from './books-list/book-detail/book-detail.component';
import { HttpModule } from '@angular/http';
import { FaqComponent } from './faq/faq.component';
import { RegisterComponent } from './auth/register/register.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './_guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { CreateBookComponent } from './create-book/create-book.component';
import { AlertsComponent } from './alerts/alerts.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BooksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'new-book',
    component: CreateBookComponent
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
    SigninComponent,
    CreateBookComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
