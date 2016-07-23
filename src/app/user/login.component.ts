import { Component }   from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Title }       from '@angular/platform-browser';
import { UserService } from './user.service';
import { Credentials } from './credentials';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]
})
export class LoginComponent {

    credentials = new Credentials('', '');

    public constructor(
        private titleService: Title,
        private userService: UserService,
        private router: Router
    ) {
        this.titleService.setTitle( 'Connexion | Cuistot' );
    }

    onSubmit() {
        console.log(this.credentials);
        this.userService
            .login(this.credentials.email, this.credentials.password)
            .then((response: any) => {
                console.log('response');
                console.log(response);
                localStorage.setItem('auth_token', response.json().token);
                this.userService.loggedIn = true;
                this.router.navigate(['/receipts']);
            })
            .catch((error: any) => {
                console.log('error');
                console.log(error);
            });
    }

}