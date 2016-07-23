import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, ControlArray, Validators, NgForm, Control,
    AbstractControl } from '@angular/common';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import { NavigationComponent } from '../navigation/navigation.component';
import { NavigationButtonComponent } from '../navigation/navigation-button.component';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
    templateUrl: './recipe-new.component.html',
    styleUrls: ['./recipe-new.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        FORM_DIRECTIVES,
        NavigationComponent,
        NavigationButtonComponent
    ],
    providers: [
        RecipeService
    ]
})
export class RecipeNewComponent {

    recipeForm: ControlGroup;

    recipe = new Recipe('', '', '', '', [], [], '');

    selectedLink = 'recipe-new';

    navOpened = false;

    public constructor(
        private titleService: Title,
        private recipeService: RecipeService,
        private router: Router,
        private fb: FormBuilder
    ) {
        this.titleService.setTitle( 'Nouvelle recette | Cuistot' );

        this.recipeForm = fb.group({
            title: fb.control(null, Validators.required),
            category: fb.control(null, Validators.required),
            time: fb.control(null, Validators.required),
            picture: fb.control(null),
            ingredients: fb.group({
                ingredient1: fb.group({
                    ingredient: fb.control(null, Validators.required)
                })
            }),
            steps: fb.group({
                step1: fb.group({
                    step: fb.control(null, Validators.required)
                })
            })
        });

        console.log(this.recipeForm);
    }

    objToArray(o: any){
        return Object.keys(o);
    }

    addIngredient() {
        let ingredientField = this.fb.group({
            ingredient: this.fb.control(null, Validators.required)
        });

        (<ControlGroup>this.recipeForm.find('ingredients')).addControl(
            'ingredient' + (Object.keys((<ControlGroup>this.recipeForm.find('ingredients')).controls).length + 1), ingredientField);
    }

    addStep() {
        let stepField = this.fb.group({
            step: this.fb.control(null, Validators.required)
        });

        (<ControlGroup>this.recipeForm.find('steps')).addControl(
            'step' + (Object.keys((<ControlGroup>this.recipeForm.find('steps')).controls).length + 1), stepField);
    }

    onToggleNav(open: boolean) {
        this.navOpened = open;
    }

    onSubmit() {
        console.log('plop');
        console.log(this.recipe);
        console.log(this.recipeForm);
        /*
        this.recipeService
            .newRecipe(this.recipe)
            .then((response: any) => {
                console.log(response);
                this.router.navigate(['/receipts']);
            })
            .catch((error: any) => {
                console.log(error);
            });
        */
    }

}
