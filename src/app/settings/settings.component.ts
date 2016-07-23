import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import { NavigationComponent } from '../navigation/navigation.component';
import { NavigationButtonComponent } from '../navigation/navigation-button.component';

@Component({
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        NavigationComponent,
        NavigationButtonComponent
    ]
})
export class SettingsComponent {

    selectedLink = 'settings';

    navOpened = false;

    public constructor(private titleService: Title ) {
        this.titleService.setTitle( 'Préférences | Cuistot' );
    }

    onToggleNav(open: boolean) {
        this.navOpened = open;
    }

}
