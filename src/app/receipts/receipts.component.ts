import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import { NavigationComponent } from '../navigation/navigation.component';
import { NavigationButtonComponent } from '../navigation/navigation-button.component';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe';

@Component({
    templateUrl: './receipts.component.html',
    styleUrls: ['./receipts.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        NavigationComponent,
        NavigationButtonComponent
    ],
    providers: [RecipeService]
})
export class ReceiptsComponent {

    selectedLink = 'receipts';

    picturePath = '../../../public/img/';

    navOpened = false;

    receipts: any;

    public constructor(
        private titleService: Title,
        private recipeService: RecipeService
    ) {

        this.titleService.setTitle( 'Toutes mes recettes | Cuistot' );

        this.recipeService
            .getReceipts()
            .then((response: any) => {
                console.log(response);
                this.receipts = response.json().receipts;
                console.log(this.receipts);
                // response.json().data as Recipe[];
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    onToggleNav(open: boolean) {
        this.navOpened = open;
    }

}
