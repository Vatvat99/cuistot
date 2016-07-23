import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe';

@Component({
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [RecipeService]
})
export class RecipeComponent {

    recipe: Recipe;

    picturePath = '../../../public/img/';

    public constructor(
        private route: ActivatedRoute,
        private titleService: Title,
        private recipeService: RecipeService
    ) {}

    /**
     * Méthode appellée au chargement du composant et permettant de récupérer le
     * paramètre dans l'url, puis de récupérer la recette correspondant, et de
     * changer le titre de la page
     */
    ngOnInit() {

        let slug = this.route.snapshot.params['slug'];

        this.recipeService
            .getRecipe(slug)
            .then((response: any) => {
                console.log(response);
                this.recipe = response.json();
                console.log('-------------');
                console.log(this.recipe);
                console.log('-------------');

                this.titleService.setTitle( this.recipe.title + ' | Cuistot' );
            })
            .catch((error: any) => {
                console.log(error);
            });

    }

}
