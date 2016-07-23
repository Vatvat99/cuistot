import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NavigationComponent {

    _open: boolean;

    @Input() selectedLink: string;

    onSelect(link: string) {
        this.selectedLink = link;
    }

    @Input()
    set open(open: boolean) {
        this._open = open;
    }

    get open() { return this._open; }

}
