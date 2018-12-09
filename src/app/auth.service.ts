import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: String = undefined;

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
        this.token = res.json().token;
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
        this.token = res.json().token;
        console.log(res);
      },
      this.errorFunction
    );
  }

  errorFunction = function(err) {
    console.log("Error occurred while creating new user.")
    console.log(err);
  };
}
