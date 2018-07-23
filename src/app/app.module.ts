import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, LOCALE_ID } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import {GrowlModule} from 'primeng/growl';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './controllers/login/login-view/login-view.component';
import { HomeViewComponent } from './controllers/home/home-view/home-view.component';
import { RouterComponent } from './controllers/router/router.component';
import { AuthGuard } from './filters/guards/auth.guard';
import { LogoutComponent } from './controllers/logout/logout.component';



registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    HomeViewComponent,
    RouterComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    GrowlModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'},
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
