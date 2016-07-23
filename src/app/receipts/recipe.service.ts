import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

    // URL vers l'api
    private receiptsUrl = 'http://api.cuistot.dev/app_dev.php/receipts';

    constructor(private http: Http) { }

    getReceipts(): Promise<any>{
        return this.http
            .get(this.receiptsUrl)
            .toPromise()
    }

    getRecipe(slug: string) {
        return this.http
            .get(this.receiptsUrl + '/' + slug)
            .toPromise()
    }

    newRecipe(recipe: Recipe) {
        let headers = new Headers({'Content-Type': 'application/json'});

        return this.http
            .post(this.receiptsUrl, JSON.stringify(recipe))
            .toPromise()
    }

    /*
    save(recipe: Recipe): Promise<Recipe>  {
        if (recipe.id) {
            return this.put(recipe);
        }
        return this.post(recipe);
    }

    delete(recipe: Recipe) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.receiptsUrl}/${recipe.id}`;
        return this.http
            .delete(url, {headers: headers})
            .toPromise()
            .catch(this.handleError);
    }

    // Ajoute une nouvelle recette
    private post(recipe: Recipe): Promise<Recipe> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.receiptsUrl, JSON.stringify(recipe), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Met à jour une recette existante
    private put(recipe: Recipe) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.receiptsUrl}/${recipe.id}`;
        return this.http
            .put(url, JSON.stringify(recipe), {headers: headers})
            .toPromise()
            .then(() => recipe)
            .catch(this.handleError);
    }
     */
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
