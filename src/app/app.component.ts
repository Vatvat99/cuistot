import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import '../../public/css/normalize.css';
import '../../public/css/common.css';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

    public constructor(private titleService: Title ) {
        this.titleService.setTitle( 'Cuistot' );
    }

}
