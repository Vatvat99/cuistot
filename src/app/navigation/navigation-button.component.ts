import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'navigation-button',
    templateUrl: './navigation-button.component.html',
    styleUrls: ['./navigation-button.component.css'],
})
export class NavigationButtonComponent {

    @Output() onToggleNav = new EventEmitter<boolean>();

    navOpened = false;

    toggleNav() {
        this.navOpened = !this.navOpened;
        this.onToggleNav.emit(this.navOpened);
    }

}