import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router/router';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LoginViewComponent } from './controllers/login/login-view/login-view.component';
import { HomeViewComponent } from './controllers/home/home-view/home-view.component';
import { appRoutes } from './routes';
import { RouterComponent } from './controllers/router/router.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    HomeViewComponent,
    RouterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
