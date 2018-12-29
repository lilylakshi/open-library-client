import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { AlertService } from './_services/alert.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStateSubject: Subject<boolean> = new Subject();

  constructor(private http: Http, private alertService: AlertService) { }

  private token_name = 'open-library-user';

  register(username: string, password: string) {
    var data = {
      "username": username,
      "password": password,
      "admin": true,
      "_id": username
    }
    this.http.post('http://localhost:8080/api/auth/register/', data).subscribe(
      (res) => {
        this.alertService.success("User created!");
        localStorage.setItem(this.token_name, JSON.stringify(res.json()));
        this.loginStateSubject.next(true);
        console.log(res);
      },
      this.errorFunction
    );
  }

  signin(username: string, password: string, router: Router) {
    var data = {
      "username": username,
      "password": password,
      "admin": true,
      "_id": username
    }
    this.http.post('http://localhost:8080/api/auth/signin/', data).subscribe(
      (res) => {
        localStorage.setItem(this.token_name, JSON.stringify(res.json()));
        this.alertService.success("Login successful!");
        this.loginStateSubject.next(true);
        router.navigate(['']);
      },
      this.errorFunction
    );
  }

  errorFunction = function(err) {
    console.log("Error occurred while creating new user.")
    console.log(err);
    this.alertService.err("An error occurred");
  };

  getToken() {
    const userObj = localStorage.getItem(this.token_name);
    return userObj != null ? JSON.parse(localStorage.getItem(this.token_name)).token : null;
  }

  logout() {
    localStorage.removeItem(this.token_name);
    this.loginStateSubject.next(false);
  }

  isLoggedIn() {
    return this.getToken() != null;
  }

  getLogoutSubject() {
    return this.loginStateSubject.asObservable();
  }
}