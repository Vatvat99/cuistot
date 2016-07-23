import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import localStorage from 'localStorage';

@Injectable()
export class ReceiptsService {

    constructor(private http: Http) {}

    getReceipts() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);

        return this.http
            .get('http://api.cuistot.dev/app_dev.php/receipts', { headers })
            .map(res => res.json());
    }
}