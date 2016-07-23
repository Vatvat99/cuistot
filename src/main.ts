import { bootstrap } from '@angular/platform-browser-dynamic';
import { Title } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTE_PROVIDER } from './app/app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { LoggedInGuard } from './app/logged-in.guard';
import { UserService } from './app/user/user.service';

if (process.env.ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    APP_ROUTE_PROVIDER,
    HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    LoggedInGuard,
    Title,
    UserService
])
.catch(err => console.error(err));
