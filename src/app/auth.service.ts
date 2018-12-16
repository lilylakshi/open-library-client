import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

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
        localStorage.setItem('open-library-user', res.json());
        console.log(res);
      },
      this.errorFunction
    );
  }

  signin(username: string, password: string) {
    var data = {
      "username": username,
      "password": password,
      "admin": true,
      "_id": username
    }
    this.http.post('http://localhost:8080/api/auth/signin/', data).subscribe(
      (res) => {
        console.log("Authentication successful!");
        localStorage.setItem('open-library-user', JSON.stringify(res.json()));
        console.log(res);
      },
      this.errorFunction
    );
  }

  errorFunction = function(err) {
    console.log("Error occurred while creating new user.")
    console.log(err);
  };

  getToken() {
    console.log(JSON.parse(localStorage.getItem('open-library-user')));
    return JSON.parse(localStorage.getItem('open-library-user')).token;
  }
}
