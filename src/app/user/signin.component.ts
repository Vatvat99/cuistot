import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import { User } from './user';
import { UserService } from './user.service';

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class SigninComponent {

    user = new User('', '');

    public constructor(
        private titleService: Title,
        private userService: UserService,
        private router: Router
    ) {
        this.titleService.setTitle( 'Inscription | Cuistot' );
    }

    onSubmit() {
        console.log(this.user);
        this.userService
            .newUser(this.user)
            .then((response: any) => {
                console.log(response);
                this.router.navigate(['/login']);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

}
