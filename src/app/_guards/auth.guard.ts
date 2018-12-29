import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { Injectable } from "@angular/core";
import { AlertService } from "../_services/alert.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router, 
        private authService: AuthService, 
        private alertService: AlertService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.authService.isLoggedIn()) {
            return true;
        }

        this.alertService.warn("Please log in to access this page");
        this.router.navigate(['/signin']);
        return false;
    }
}