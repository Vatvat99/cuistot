import { Component }   from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './user.service';
import { Credentials } from './credentials';

@Component({
    template: '',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]
})
export class LogoutComponent {

    public constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.userService.logout();
        this.router.navigate(['/login']);
    }
}