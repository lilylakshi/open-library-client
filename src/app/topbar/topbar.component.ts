import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

    loggedIn: boolean = false;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.loggedIn = this.authService.isLoggedIn();
    }

    logout() {
        this.authService.logout();

        this.router.navigate(['/signin']);
    }
 }