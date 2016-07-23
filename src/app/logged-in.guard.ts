import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user/user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {}

    canActivate() {
        console.log('Utilisateur connecté : ' + this.userService.isLoggedIn());

        if (this.userService.isLoggedIn()) {
            return true;
        }
        console.log('plop');
        this.router.navigate(['/login']);
        return false;
    }

}