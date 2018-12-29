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

    constructor(private authService: AuthService, private router: Router) {
        this.loggedIn = this.authService.isLoggedIn();
        this.authService.getLogoutSubject().subscribe(state => this.loggedIn = state);
    }

    ngOnInit() { }

    logout() {
        this.authService.logout();

        this.router.navigate(['/signin']);
    }
 }