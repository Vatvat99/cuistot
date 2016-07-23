/**
 * Routes principales de l'application
 */
import { provideRouter, RouterConfig } from '@angular/router';

import { LoginComponent }    from './user/login.component';
import { SigninComponent }    from './user/signin.component';
import { LogoutComponent }    from './user/logout.component';
import { ReceiptsComponent }  from './receipts/receipts.component';
import { RecipeComponent }    from './receipts/recipe.component';
import { RecipeNewComponent }    from './receipts/recipe-new.component';
import { SettingsComponent }    from './settings/settings.component';
import { LoggedInGuard } from './logged-in.guard';

const routes: RouterConfig = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent, canActivate: [LoggedInGuard] },
    { path: 'receipts', component: ReceiptsComponent, canActivate: [LoggedInGuard] },
    { path: 'recipe/new', component: RecipeNewComponent, canActivate: [LoggedInGuard] },
    { path: 'recipe/:slug', component: RecipeComponent, canActivate: [LoggedInGuard] },
    { path: 'settings', component: SettingsComponent, canActivate: [LoggedInGuard] }
];

export const APP_ROUTE_PROVIDER = [
    provideRouter(routes)
];
