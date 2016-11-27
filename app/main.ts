import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import 'hammerjs'
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {AboutComponent} from './about.component'

import {SingletoneService}   from './services/singletone-service';
import {PopupDirective} from "./directives/popup.directive";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, AboutComponent, PopupDirective],
    bootstrap: [AppComponent],
    providers: [ SingletoneService /*{
        provide: SingletoneService, //useClass: SingletoneService
        useValue: 'api/useValue'
    }*/]
})

export class AppModule {
}


if (process.env.ENV === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
