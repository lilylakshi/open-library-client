import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

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
        console.log("Authentication successful!");
        localStorage.setItem(this.token_name, res.json());
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
        console.log("Authentication successful!");
        localStorage.setItem(this.token_name, JSON.stringify(res.json()));
        router.navigate(['']);
      },
      this.errorFunction
    );
  }

  errorFunction = function(err) {
    console.log("Error occurred while creating new user.")
    console.log(err);
  };

  getToken() {
    const userObj = localStorage.getItem(this.token_name);
    return userObj != null ? JSON.parse(localStorage.getItem(this.token_name)).token : null;
  }

  logout() {
    localStorage.removeItem(this.token_name);
  }

  isLoggedIn() {
    return this.getToken() != null;
  }
}
