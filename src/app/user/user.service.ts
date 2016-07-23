import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from './user';
// import localStorage from 'localStorage';

@Injectable()
export class UserService {

    // URL vers l'api
    private tokensUrl: string = 'http://api.cuistot.dev/app_dev.php/tokens';
    private usersUrl: string = 'http://api.cuistot.dev/app_dev.php/users';

    public loggedIn: boolean = false;

    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
        console.log('loggedIn : ' + this.loggedIn);
    }

    login(email:string, password:string): Promise<any> {
        console.log('Connexion : ' + this.b64EncodeUnicode(email + ':' + password));

        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + this.b64EncodeUnicode(email + ':' + password));

        return this.http
            .post(this.tokensUrl, JSON.stringify({ email, password }), { headers })
            .toPromise();
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    newUser(user: User) {
        let headers = new Headers({'Content-Type': 'application/json'});

        return this.http
            .post(this.usersUrl, JSON.stringify(user))
            .toPromise()
    }

    private b64EncodeUnicode(str: string) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match: string, p1: string) => {
            return String.fromCharCode(parseInt('0x' + p1));
        }));
    }
}